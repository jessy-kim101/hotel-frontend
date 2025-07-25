import React, { createContext, useState } from 'react';
import Home from './home';

type homeContextType = {
  showHome: (message: string, type?: 'success' | 'error' | 'info') => void;
};

const HomeContext = createContext<homeContextType>({
  showHome: () => {},
});

export function HomeProvider({ children }: { children: React.ReactNode }) {
    const [home, setHome] = useState<{
        isVisible: boolean;
        message: string;
        type: 'success' | 'error' | 'info' | 'warning';
    }>({
        isVisible: false,
        message: '',
        type: 'success',
    });

    const showHome = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
        setHome({ isVisible: true, message, type });
    };

    const hidehome = () => {
        setHome({ ...home, isVisible: false });
    };

    return (
        <HomeContext.Provider value={{ showHome }}>
            {children}
            <Home
                message={home.message}
                type={home.type}
                isVisible={home.isVisible}
                onClose={hidehome}
                duration={3000}
            />
        </HomeContext.Provider>
    );
};

// Remove useHome export from this file