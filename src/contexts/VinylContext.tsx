import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VinylContextType {
  isRotating: boolean;
  selectedRecord: string | null;
  setVinylState: (isRotating: boolean, selectedRecord: string | null) => void;
  stopVinyl: () => void;
}

const VinylContext = createContext<VinylContextType | undefined>(undefined);

export const useVinyl = () => {
  const context = useContext(VinylContext);
  if (context === undefined) {
    throw new Error('useVinyl must be used within a VinylProvider');
  }
  return context;
};

interface VinylProviderProps {
  children: ReactNode;
}

export const VinylProvider: React.FC<VinylProviderProps> = ({ children }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);

  const setVinylState = (rotating: boolean, record: string | null) => {
    setIsRotating(rotating);
    setSelectedRecord(record);
  };

  const stopVinyl = () => {
    setIsRotating(false);
    setSelectedRecord(null);
  };

  return (
    <VinylContext.Provider value={{
      isRotating,
      selectedRecord,
      setVinylState,
      stopVinyl
    }}>
      {children}
    </VinylContext.Provider>
  );
};
