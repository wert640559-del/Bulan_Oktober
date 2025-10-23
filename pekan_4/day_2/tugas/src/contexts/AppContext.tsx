// src/contexts/AppContext.tsx
import React, { createContext, useContext, useReducer, ReactNode, useCallback } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  timestamp: Date;
}

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'ADD_NOTIFICATION'; payload: Omit<Notification, 'id' | 'timestamp'> }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'CLEAR_NOTIFICATIONS' };

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  login: (user: User) => void;
  logout: () => void;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
}

const initialState: AppState = {
  user: null,
  theme: 'light',
  notifications: []
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'ADD_NOTIFICATION':
      const newNotification: Notification = {
        ...action.payload,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date()
      };
      return {
        ...state,
        notifications: [...state.notifications, newNotification]
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.payload)
      };
    case 'CLEAR_NOTIFICATIONS':
      return { ...state, notifications: [] };
    default:
      return state;
  }
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const login = useCallback((user: User): void => {
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        type: 'success',
        message: `Welcome back, ${user.name}!`
      }
    });
  }, []);

  const logout = useCallback((): void => {
    dispatch({ type: 'SET_USER', payload: null });
    dispatch({
      type: 'ADD_NOTIFICATION',
      payload: {
        type: 'info',
        message: 'You have been logged out'
      }
    });
  }, []);

  const addNotification = useCallback((
    notification: Omit<Notification, 'id' | 'timestamp'>
  ): void => {
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  }, []);

  const removeNotification = useCallback((id: string): void => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const value: AppContextType = {
    state,
    dispatch,
    login,
    logout,
    addNotification,
    removeNotification
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};