import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import HowItWorks from './pages/HowItWorks';
import Reviews from './pages/Reviews';
import ClinicDetail from './pages/ClinicDetail';
import Safety from './pages/Safety';
import LandingPage from './pages/LandingPage';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import ClinicMatchQuiz from './components/ClinicMatchQuiz';
import SecondOpinion from './pages/SecondOpinion';
import TreatmentDetail from './pages/TreatmentDetail';
import DoctorProfile from './pages/DoctorProfile';
import Doctors from './pages/Doctors';
import Courses from './pages/Courses';
import PatientDashboard from './pages/PatientDashboard';
import { ToastProvider } from './context/ToastContext';
import ScrollToTopButton from './components/ScrollToTop';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Global handler for quiz
  useEffect(() => {
    const handleOpenQuiz = () => setIsQuizOpen(true);
    window.addEventListener('openClinicQuiz', handleOpenQuiz);
    return () => window.removeEventListener('openClinicQuiz', handleOpenQuiz);
  }, []);

  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <ClinicMatchQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/clinic/:id" element={<ClinicDetail />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/turkey" element={<LandingPage country="Turkey" />} />
          <Route path="/thailand" element={<LandingPage country="Thailand" />} />
          <Route path="/mexico" element={<LandingPage country="Mexico" />} />
          <Route path="/germany" element={<LandingPage country="Germany" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/second-opinion" element={<SecondOpinion />} />
          <Route path="/treatment/:slug" element={<TreatmentDetail />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dashboard" element={<PatientDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
