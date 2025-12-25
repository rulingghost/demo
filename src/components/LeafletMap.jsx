import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Genişletilmiş Çeviri ve Veri Havuzu
const countryDataBank = {
    "Turkey": { tr: "Türkiye", flag: "🇹🇷", fields: ["Saç Ekimi", "Diş Estetiği", "Plastik Cerrahi"], cost: "Düşük", quality: "Yüksek" },
    "United States of America": { tr: "ABD", flag: "🇺🇸", fields: ["Onkoloji", "Kardiyoloji", "Ortopedi"], cost: "Çok Yüksek", quality: "Mükemmel" },
    "Germany": { tr: "Almanya", flag: "🇩🇪", fields: ["Nöroloji", "Onkoloji", "Check-up"], cost: "Yüksek", quality: "Mükemmel" },
    "United Kingdom": { tr: "İngiltere", flag: "🇬🇧", fields: ["Tüp Bebek", "Genetik", "Göz Cerrahisi"], cost: "Yüksek", quality: "Çok Yüksek" },
    "Mexico": { tr: "Meksika", flag: "🇲🇽", fields: ["Bariatrik Cerrahi", "Diş", "Plastik Cerrahi"], cost: "Düşük", quality: "İyi" },
    "Thailand": { tr: "Tayland", flag: "🇹🇭", fields: ["Cinsiyet Değişimi", "Diş", "Wellness"], cost: "Düşük", quality: "Yüksek" },
    "South Korea": { tr: "Güney Kore", flag: "🇰🇷", fields: ["Cilt Bakımı", "Plastik Cerrahi", "Kök Hücre"], cost: "Orta", quality: "Mükemmel" },
    "Spain": { tr: "İspanya", flag: "🇪🇸", fields: ["Tüp Bebek", "Organ Nakli", "Spor Tıbbı"], cost: "Orta", quality: "Yüksek" },
    "India": { tr: "Hindistan", flag: "🇮🇳", fields: ["Kalp Cerrahisi", "Ortopedi", "Ayurveda"], cost: "Çok Düşük", quality: "Yüksek" },
    "Brazil": { tr: "Brezilya", flag: "🇧🇷", fields: ["Plastik Cerrahi", "Kardiyoloji", "Dental"], cost: "Düşük", quality: "Yüksek" },
    "Poland": { tr: "Polonya", flag: "🇵🇱", fields: ["Diş Tedavisi", "Göz Cerrahisi", "Ortopedi"], cost: "Düşük", quality: "Yüksek" },
    "United Arab Emirates": { tr: "BAE", flag: "🇦🇪", fields: ["Estetik", "Check-up", "Rehabilitasyon"], cost: "Yüksek", quality: "Mükemmel" }
};

// Varsayılan veri üreteci (DataBank'te olmayan ülkeler için)
const getCountryData = (name) => {
    return countryDataBank[name] || {
        tr: name,
        flag: "📍",
        fields: ["Genel Cerrahi", "Diş Tedavisi", "Check-up"],
        cost: "Orta",
        quality: "İyi"
    };
};

const healthColors = ['#a3e4d7', '#76d7c4', '#48c9b0', '#85c1e9', '#5dade2', '#aed6f1'];

function getColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return healthColors[Math.abs(hash) % healthColors.length];
}

const LeafletMap = ({ searchValue, onCountrySelect }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const geojsonLayer = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!mapInstance.current && mapRef.current) {
            mapInstance.current = L.map(mapRef.current, {
                center: [30, 0],
                zoom: 2.5,
                minZoom: 2,
                maxZoom: 7,
                zoomControl: false,
                attributionControl: false,
                dragging: true,
                scrollWheelZoom: true
            });

            fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false);
                    geojsonLayer.current = L.geoJson(data, {
                        style: (f) => ({
                            fillColor: getColor(f.properties.name),
                            weight: 1, color: 'white', fillOpacity: 0.7
                        }),
                        onEachFeature: (feature, layer) => {
                            const countryData = getCountryData(feature.properties.name);
                            
                            const tooltipContent = `
                                <div style="padding: 10px; min-width: 180px;">
                                    <div style="font-weight: 800; border-bottom: 2px solid #1abc9c; margin-bottom: 8px; pb: 4px; font-size: 15px;">
                                        ${countryData.tr.toUpperCase()}
                                    </div>
                                    <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
                                        <tr><td style="color: #666;">Tercihler:</td><td style="font-weight: 600;">${countryData.fields[0]}</td></tr>
                                        <tr><td style="color: #666;">Maliyet:</td><td style="font-weight: 600; color: #e67e22;">${countryData.cost}</td></tr>
                                        <tr><td style="color: #666;">Kalite:</td><td style="font-weight: 600; color: #27ae60;">${countryData.quality}</td></tr>
                                    </table>
                                </div>
                            `;

                            layer.bindTooltip(tooltipContent, {
                                direction: 'top',
                                offset: [0, -10],
                                sticky: true,
                                opacity: 1,
                                className: 'custom-map-tooltip'
                            });

                            layer.on({
                                mouseover: (e) => {
                                    e.target.setStyle({ weight: 3, color: '#fff', fillOpacity: 0.9, fillColor: '#f1c40f' });
                                    e.target.bringToFront();
                                },
                                mouseout: (e) => {
                                    const isSelected = searchValue && (
                                        feature.properties.name.toLowerCase() === searchValue.toLowerCase() ||
                                        (countryData.tr && countryData.tr.toLowerCase() === searchValue.toLowerCase())
                                    );
                                    if (!isSelected) geojsonLayer.current.resetStyle(e.target);
                                },
                                click: (e) => {
                                    onCountrySelect(countryData.tr, countryData);
                                    mapInstance.current.fitBounds(e.target.getBounds(), { padding: [50, 50] });
                                }
                            });
                        }
                    }).addTo(mapInstance.current);

                    mapInstance.current.setMaxBounds([[-90, -180], [90, 180]]);
                });
        }
        return () => { if (mapInstance.current) { mapInstance.current.remove(); mapInstance.current = null; } };
    }, []);

    useEffect(() => {
        if (geojsonLayer.current && searchValue) {
            let found = false;
            geojsonLayer.current.eachLayer((layer) => {
                const f = layer.feature.properties.name;
                const trName = getCountryData(f).tr;
                const isSelected = f.toLowerCase() === searchValue.toLowerCase() || trName.toLowerCase() === searchValue.toLowerCase();

                if (isSelected) {
                    layer.setStyle({ fillColor: '#f1c40f', weight: 4, color: 'white', fillOpacity: 1 });
                    layer.bringToFront();
                    if (!found) {
                        mapInstance.current.fitBounds(layer.getBounds(), { padding: [100, 100], maxZoom: 5 });
                        found = true;
                    }
                } else {
                    geojsonLayer.current.resetStyle(layer);
                }
            });
        }
    }, [searchValue]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {isLoading && (
                <div style={{ position: 'absolute', inset: 0, background: '#eaf6f6', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="map-spinner"></div>
                    <div style={{ fontWeight: '600', color: '#16a085', marginTop: '15px' }}>Veriler İşleniyor...</div>
                </div>
            )}
            <div ref={mapRef} style={{ height: '100%', width: '100%', background: '#eaf6f6' }}></div>
            <style>{`
                .map-spinner { border: 4px solid #d1f2eb; border-top: 4px solid #1abc9c; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .custom-map-tooltip { 
                    background: white !important; 
                    border: none !important; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important; 
                    border-radius: 12px !important; 
                    padding: 0 !important;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default LeafletMap;
