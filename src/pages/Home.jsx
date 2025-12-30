import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Features from '../components/Features';
import LiveTicker from '../components/home/LiveTicker';
import StatsSection from '../components/home/StatsSection';
import MedicalBoard from '../components/home/MedicalBoard';
import PatientStories from '../components/home/PatientStories';
import BlogSection from '../components/home/BlogSection';
import FAQSection from '../components/home/FAQSection';
import PriceTable from '../components/home/PriceTable';
import ResultsSection from '../components/home/ResultsSection';
import DealsSection from '../components/home/DealsSection';
import SafetySection from '../components/home/SafetySection';
import Newsletter from '../components/home/Newsletter';
import SEO from '../components/SEO';
import Courses from './Courses'; // Importing Courses component to preview on Home

const Home = () => {
  return (
    <div style={{ paddingTop: '0' }}> {/* Navbar now handles padding or Hero does */}
      <SEO 
        title="Doctora | Tıp Eğitimi ve Tele-Tıp"
        description="Doktorlar için ileri düzey eğitimler ve hastalar için online muayene platformu."
      />
      <Hero />
      
      <LiveTicker />

      <StatsSection />
      
      {/* Re-using Categories as Course Categories */}
      <Categories />

      {/* Re-using Deals as Education Bundles */}
      <DealsSection />

      {/* New Focus: Results (Success stories of training) */}
      <ResultsSection />

      {/* Safety/Accreditation */}
      <SafetySection />

      {/* Academic Board */}
      <MedicalBoard />
      
      {/* Reviews */}
      <PatientStories />
      
      {/* Comparison Table (Telemedicine vs Physical) */}
      <PriceTable />

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
