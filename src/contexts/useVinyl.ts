import { useContext } from 'react';
import { VinylContext } from './VinylContext';

export const useVinyl = () => {
  const context = useContext(VinylContext);
  if (context === undefined) {
    throw new Error('useVinyl must be used within a VinylProvider');
  }
  return context;
};
