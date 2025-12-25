import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = async (email, password) => {
    // Simulated API call - replace with real API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password.length >= 6) {
          const mockUser = {
            id: Date.now(),
            email,
            name: email.split('@')[0],
            avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=007AFF&color=fff`,
            createdAt: new Date().toISOString(),
            appointments: [],
            favorites: []
          };
          setUser(mockUser);
          resolve(mockUser);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (name, email, password) => {
    // Simulated API call - replace with real API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && email && password.length >= 6) {
          const mockUser = {
            id: Date.now(),
            email,
            name,
            avatar: `https://ui-avatars.com/api/?name=${name}&background=007AFF&color=fff`,
            createdAt: new Date().toISOString(),
            appointments: [],
            favorites: []
          };
          setUser(mockUser);
          resolve(mockUser);
        } else {
          reject(new Error('Invalid registration data'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addAppointment = (appointment) => {
    setUser(prev => ({
      ...prev,
      appointments: [...(prev.appointments || []), { ...appointment, id: Date.now() }]
    }));
  };

  const toggleFavorite = (itemId, itemType = 'doctor') => {
    setUser(prev => {
      const favorites = prev.favorites || [];
      const exists = favorites.find(f => f.id === itemId && f.type === itemType);
      
      if (exists) {
        return {
          ...prev,
          favorites: favorites.filter(f => !(f.id === itemId && f.type === itemType))
        };
      } else {
        return {
          ...prev,
          favorites: [...favorites, { id: itemId, type: itemType, addedAt: new Date().toISOString() }]
        };
      }
    });
  };

  const isFavorite = (itemId, itemType = 'doctor') => {
    if (!user || !user.favorites) return false;
    return user.favorites.some(f => f.id === itemId && f.type === itemType);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile,
    addAppointment,
    toggleFavorite,
    isFavorite,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
