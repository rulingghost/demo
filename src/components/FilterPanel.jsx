import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const FilterPanel = ({ onFilterChange, initialFilters = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: initialFilters.priceRange || [0, 10000],
    rating: initialFilters.rating || 0,
    experience: initialFilters.experience || 0,
    languages: initialFilters.languages || [],
    specialties: initialFilters.specialties || [],
    location: initialFilters.location || '',
    ...initialFilters
  });

  const [expandedSections, setExpandedSections] = useState({
    price: true,
    rating: true,
    experience: false,
    languages: false,
    specialties: false
  });

  const languages = ['Türkçe', 'İngilizce', 'Almanca', 'Arapça', 'Rusça', 'Fransızca'];
  const specialties = [
    'Saç Ekimi', 'Rinoplasti', 'Diş İmplantı', 'Meme Estetiği',
    'Liposuction', 'Tüp Bebek', 'Göz Cerrahisi', 'Ortopedi'
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const toggleArrayFilter = (key, value) => {
    const current = filters[key] || [];
    const newValue = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    handleFilterChange(key, newValue);
  };

  const clearFilters = () => {
    const cleared = {
      priceRange: [0, 10000],
      rating: 0,
      experience: 0,
      languages: [],
      specialties: [],
      location: ''
    };
    setFilters(cleared);
    if (onFilterChange) onFilterChange(cleared);
  };

  const activeFilterCount = Object.values(filters).filter(v => 
    (Array.isArray(v) && v.length > 0) || 
    (typeof v === 'number' && v > 0) ||
    (typeof v === 'string' && v !== '') ||
    (Array.isArray(v) && v[0] !== 0)
  ).length;

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-outline"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          position: 'relative'
        }}
      >
        <SlidersHorizontal size={18} />
        Filtreler
        {activeFilterCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            background: 'var(--primary)',
            color: 'white',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: '700'
          }}>
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                zIndex: 999
              }}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '400px',
                maxWidth: '90vw',
                background: 'white',
                zIndex: 1000,
                boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Header */}
              <div style={{
                padding: '24px',
                borderBottom: '1px solid var(--border-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Filtreler</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'var(--surface)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Filters */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                
                {/* Price Range */}
                <FilterSection
                  title="Fiyat Aralığı"
                  isExpanded={expandedSections.price}
                  onToggle={() => toggleSection('price')}
                >
                  <div style={{ padding: '16px 0' }}>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="100"
                      value={filters.priceRange[1]}
                      onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                      style={{ width: '100%' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '14px', fontWeight: '600' }}>
                      <span>€0</span>
                      <span style={{ color: 'var(--primary)' }}>€{filters.priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </FilterSection>

                {/* Rating */}
                <FilterSection
                  title="Minimum Puan"
                  isExpanded={expandedSections.rating}
                  onToggle={() => toggleSection('rating')}
                >
                  <div style={{ display: 'flex', gap: '8px', padding: '16px 0', flexWrap: 'wrap' }}>
                    {[0, 3, 4, 4.5, 5].map(rating => (
                      <button
                        key={rating}
                        onClick={() => handleFilterChange('rating', rating)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '12px',
                          border: filters.rating === rating ? '2px solid var(--primary)' : '2px solid var(--border)',
                          background: filters.rating === rating ? 'var(--primary-light)' : 'white',
                          color: filters.rating === rating ? 'var(--primary)' : 'var(--secondary)',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        {rating === 0 ? 'Tümü' : `${rating}+ ⭐`}
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Experience */}
                <FilterSection
                  title="Deneyim (Yıl)"
                  isExpanded={expandedSections.experience}
                  onToggle={() => toggleSection('experience')}
                >
                  <div style={{ display: 'flex', gap: '8px', padding: '16px 0', flexWrap: 'wrap' }}>
                    {[0, 5, 10, 15, 20].map(years => (
                      <button
                        key={years}
                        onClick={() => handleFilterChange('experience', years)}
                        style={{
                          padding: '8px 16px',
                          borderRadius: '12px',
                          border: filters.experience === years ? '2px solid var(--primary)' : '2px solid var(--border)',
                          background: filters.experience === years ? 'var(--primary-light)' : 'white',
                          color: filters.experience === years ? 'var(--primary)' : 'var(--secondary)',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        {years === 0 ? 'Tümü' : `${years}+ yıl`}
                      </button>
                    ))}
                  </div>
                </FilterSection>

                {/* Languages */}
                <FilterSection
                  title="Diller"
                  isExpanded={expandedSections.languages}
                  onToggle={() => toggleSection('languages')}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
                    {languages.map(lang => (
                      <label
                        key={lang}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          padding: '8px',
                          borderRadius: '8px',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <input
                          type="checkbox"
                          checked={filters.languages.includes(lang)}
                          onChange={() => toggleArrayFilter('languages', lang)}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{lang}</span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

                {/* Specialties */}
                <FilterSection
                  title="Uzmanlık Alanları"
                  isExpanded={expandedSections.specialties}
                  onToggle={() => toggleSection('specialties')}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px 0' }}>
                    {specialties.map(spec => (
                      <label
                        key={spec}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          padding: '8px',
                          borderRadius: '8px',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <input
                          type="checkbox"
                          checked={filters.specialties.includes(spec)}
                          onChange={() => toggleArrayFilter('specialties', spec)}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{spec}</span>
                      </label>
                    ))}
                  </div>
                </FilterSection>

              </div>

              {/* Footer */}
              <div style={{
                padding: '24px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                gap: '12px'
              }}>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                  style={{ flex: 1 }}
                >
                  Temizle
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  Uygula
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const FilterSection = ({ title, isExpanded, onToggle, children }) => (
  <div style={{ marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
        marginBottom: isExpanded ? '0' : '0'
      }}
    >
      <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--secondary)' }}>{title}</h4>
      <motion.div
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown size={20} color="var(--text-muted)" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default FilterPanel;
