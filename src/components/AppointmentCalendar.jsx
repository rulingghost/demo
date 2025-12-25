import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';

const AppointmentCalendar = ({ isOpen, onClose, doctorName, onBooking }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  const isDateAvailable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today && date.getDay() !== 0; // Not Sunday and not in past
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && onBooking) {
      onBooking({
        date: selectedDate,
        time: selectedTime,
        doctor: doctorName
      });
    }
  };

  const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 9998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '900px',
              maxHeight: '90vh',
              background: 'white',
              borderRadius: '24px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              zIndex: 9999,
              overflow: 'hidden',
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
              alignItems: 'center',
              background: 'var(--primary)',
              color: 'white'
            }}>
              <div>
                <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }}>Randevu Al</h2>
                <p style={{ fontSize: '14px', opacity: 0.9 }}>{doctorName}</p>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div style={{ 
              flex: 1, 
              overflowY: 'auto', 
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '32px'
            }}>
              {/* Calendar */}
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <button
                    onClick={handlePrevMonth}
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
                    <ChevronLeft size={20} />
                  </button>
                  <h3 style={{ fontSize: '18px', fontWeight: '700' }}>
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={handleNextMonth}
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
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Day names */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  {dayNames.map(day => (
                    <div key={day} style={{
                      textAlign: 'center',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: 'var(--text-muted)',
                      padding: '8px 0'
                    }}>
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: '8px'
                }}>
                  {getDaysInMonth(currentMonth).map((date, index) => {
                    const isAvailable = isDateAvailable(date);
                    const isSelected = selectedDate && date && 
                      selectedDate.toDateString() === date.toDateString();

                    return (
                      <motion.button
                        key={index}
                        whileHover={isAvailable ? { scale: 1.05 } : {}}
                        whileTap={isAvailable ? { scale: 0.95 } : {}}
                        onClick={() => isAvailable && setSelectedDate(date)}
                        disabled={!isAvailable}
                        style={{
                          aspectRatio: '1',
                          border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border)',
                          background: isSelected ? 'var(--primary)' : isAvailable ? 'white' : 'var(--surface)',
                          color: isSelected ? 'white' : isAvailable ? 'var(--secondary)' : 'var(--text-light)',
                          borderRadius: '12px',
                          cursor: isAvailable ? 'pointer' : 'not-allowed',
                          fontSize: '14px',
                          fontWeight: isSelected ? '700' : '500',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {date ? date.getDate() : ''}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={20} color="var(--primary)" />
                  Saat Seçin
                </h3>
                
                {selectedDate ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px'
                  }}>
                    {availableTimes.map(time => {
                      const isSelected = selectedTime === time;
                      return (
                        <motion.button
                          key={time}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTime(time)}
                          style={{
                            padding: '12px',
                            border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border)',
                            background: isSelected ? 'var(--primary-light)' : 'white',
                            color: isSelected ? 'var(--primary)' : 'var(--secondary)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: isSelected ? '700' : '500',
                            transition: 'all 0.2s'
                          }}
                        >
                          {time}
                        </motion.button>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{
                    padding: '40px',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    background: 'var(--surface)',
                    borderRadius: '16px'
                  }}>
                    <Calendar size={48} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
                    <p>Önce bir tarih seçin</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div style={{
              padding: '24px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--surface)'
            }}>
              <div>
                {selectedDate && selectedTime && (
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    <strong style={{ color: 'var(--secondary)' }}>Seçilen:</strong>{' '}
                    {selectedDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} - {selectedTime}
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={onClose} className="btn-outline">
                  İptal
                </button>
                <button
                  onClick={handleBooking}
                  disabled={!selectedDate || !selectedTime}
                  className="btn-primary"
                  style={{
                    opacity: (!selectedDate || !selectedTime) ? 0.5 : 1,
                    cursor: (!selectedDate || !selectedTime) ? 'not-allowed' : 'pointer'
                  }}
                >
                  Randevu Oluştur
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AppointmentCalendar;
