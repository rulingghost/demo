import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Features from '../components/Features';
import LiveTicker from '../components/home/LiveTicker';
import StatsSection from '../components/home/StatsSection';
import ProcessSection from '../components/home/ProcessSection';
import DestinationsSection from '../components/home/DestinationsSection';
import ServicesSection from '../components/home/ServicesSection';
import TrustBar from '../components/home/TrustBar';
import MedicalBoard from '../components/home/MedicalBoard';
import PatientStories from '../components/home/PatientStories';
import GlobalMedia from '../components/home/GlobalMedia';
import BlogSection from '../components/home/BlogSection';
import FAQSection from '../components/home/FAQSection';
import PriceTable from '../components/home/PriceTable';
import CareTeam from '../components/home/CareTeam';
import ResultsSection from '../components/home/ResultsSection';
import GlobalPresence from '../components/home/GlobalPresence';
import DealsSection from '../components/home/DealsSection';
import SafetySection from '../components/home/SafetySection';
import QuickHub from '../components/home/QuickHub';
import Newsletter from '../components/home/Newsletter';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <SEO 
        title="Doctora | Dünya Çapında Güvenilir Sağlık Turizmi"
        description="Türkiye'nin en iyi doktorları ve klinikleriyle tanışın. Saç ekimi, estetik cerrahi ve diş tedavilerinde uzman kadromuzla yanınızdayız."
      />
      <Hero />
      
      <QuickHub />

      <Categories />

      <StatsSection />
      
      <DestinationsSection />

      <ResultsSection />

      <SafetySection />

      <ProcessSection />
      
      <CareTeam />

      <TrustBar />
      
      <MedicalBoard />
      
      <PatientStories />
      
      <DealsSection />

      <FAQSection />

      <BlogSection />
      
      <Newsletter />

      {/* Floating CTA Buttons */}
      <div className="floating-cta">
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="floating-btn whatsapp animate-float">
          <MessageCircle size={28} />
        </a>
        <div className="floating-btn support">
          <Phone size={28} />
        </div>
      </div>
    </div>
  );
};

export default Home;
