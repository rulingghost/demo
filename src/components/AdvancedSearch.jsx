import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AdvancedSearch = ({ placeholder = "Tedavi, doktor veya klinik ara...", onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Mock data - gerçek uygulamada API'den gelecek
  const searchData = {
    treatments: [
      'Saç Ekimi', 'Rinoplasti', 'Diş İmplantı', 'Meme Büyütme',
      'Liposuction', 'Diş Kaplama', 'Tüp Bebek', 'Tüp Mide', 'BBL',
      'Yüz Germe', 'Göz Kapağı Estetiği', 'Botox', 'Dolgu'
    ],
    doctors: [
      'Op. Dr. Ömer Buhşem', 'Dr. Tarik Akar', 'Dr. Bülent Cihantimur'
    ],
    clinics: [
      "D'estetica Klinik", 'Liv Hospital Ulus', 'Estetik International'
    ],
    locations: [
      'İstanbul', 'Ankara', 'İzmir', 'Antalya', 'Bursa'
    ]
  };

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 1) {
      const filtered = [];
      const lowerQuery = query.toLowerCase();

      // Search in all categories
      Object.entries(searchData).forEach(([category, items]) => {
        items.forEach(item => {
          if (item.toLowerCase().includes(lowerQuery)) {
            filtered.push({ text: item, category });
          }
        });
      });

      setSuggestions(filtered.slice(0, 8)); // Limit to 8 results
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (searchTerm) => {
    const term = searchTerm || query;
    if (term.trim()) {
      // Save to recent searches
      const updated = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));

      // Navigate to search page
      navigate(`/search?q=${encodeURIComponent(term)}`);
      setQuery('');
      setIsOpen(false);

      if (onSearch) onSearch(term);
    }
  };

  const clearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const categoryIcons = {
    treatments: '💊',
    doctors: '👨‍⚕️',
    clinics: '🏥',
    locations: '📍'
  };

  const categoryNames = {
    treatments: 'Tedaviler',
    doctors: 'Doktorlar',
    clinics: 'Klinikler',
    locations: 'Lokasyonlar'
  };

  return (
    <div ref={searchRef} style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
      {/* Search Input */}
      <div style={{
        position: 'relative',
        background: 'white',
        borderRadius: '16px',
        boxShadow: isOpen ? '0 8px 30px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s',
        border: isOpen ? '2px solid var(--primary)' : '2px solid transparent'
      }}>
        <Search 
          size={20} 
          style={{ 
            position: 'absolute', 
            left: '16px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }} 
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder={placeholder}
          style={{
            width: '100%',
            padding: '16px 50px 16px 50px',
            border: 'none',
            borderRadius: '16px',
            fontSize: '15px',
            outline: 'none',
            background: 'transparent'
          }}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'var(--surface)',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              right: 0,
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              maxHeight: '400px',
              overflowY: 'auto',
              zIndex: 1000,
              border: '1px solid var(--border-light)'
            }}
          >
            {/* Suggestions */}
            {suggestions.length > 0 ? (
              <div style={{ padding: '8px' }}>
                {suggestions.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ background: 'var(--surface)' }}
                    onClick={() => handleSearch(item.text)}
                    style={{
                      padding: '12px 16px',
                      cursor: 'pointer',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>{categoryIcons[item.category]}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--secondary)' }}>
                        {item.text}
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {categoryNames[item.category]}
                      </div>
                    </div>
                    <Search size={16} color="var(--text-light)" />
                  </motion.div>
                ))}
              </div>
            ) : query.length > 1 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                Sonuç bulunamadı
              </div>
            ) : recentSearches.length > 0 ? (
              <div style={{ padding: '8px' }}>
                <div style={{ 
                  padding: '12px 16px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderBottom: '1px solid var(--border-light)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)' }}>
                    <TrendingUp size={16} />
                    Son Aramalar
                  </div>
                  <button
                    onClick={clearRecent}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary)',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Temizle
                  </button>
                </div>
                {recentSearches.map((search, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ background: 'var(--surface)' }}
                    onClick={() => handleSearch(search)}
                    style={{
                      padding: '12px 16px',
                      cursor: 'pointer',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Search size={16} color="var(--text-light)" />
                    <span style={{ fontSize: '14px', color: 'var(--secondary)' }}>{search}</span>
                  </motion.div>
                ))}
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedSearch;
