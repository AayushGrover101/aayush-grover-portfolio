import React, { createContext, useState, type ReactNode } from 'react';

interface VinylContextType {
  isRotating: boolean;
  selectedRecord: string | null;
  isPlaying: boolean;
  setVinylState: (isRotating: boolean, selectedRecord: string | null) => void;
  stopVinyl: () => void;
  playAudio: (playlistUrl: string) => void;
  stopAudio: () => void;
}

const VinylContext = createContext<VinylContextType | undefined>(undefined);

interface VinylProviderProps {
  children: ReactNode;
}

export const VinylProvider: React.FC<VinylProviderProps> = ({ children }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const setVinylState = (rotating: boolean, record: string | null) => {
    setIsRotating(rotating);
    setSelectedRecord(record);
  };

  const stopVinyl = () => {
    setIsRotating(false);
    setSelectedRecord(null);
    stopAudio();
  };

  const playAudio = (playlistUrl: string) => {
    // For YouTube playlists, we'll use an iframe approach
    // Create a hidden iframe to play the YouTube playlist
    const iframe = document.createElement('iframe');
    iframe.src = playlistUrl;
    iframe.style.position = 'fixed';
    iframe.style.top = '-9999px';
    iframe.style.left = '-9999px';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.style.border = 'none';
    iframe.allow = 'autoplay; encrypted-media; fullscreen';
    iframe.allowFullscreen = true;
    iframe.title = 'YouTube Audio Player';
    
    // Remove any existing audio iframe
    const existingIframe = document.getElementById('youtube-audio-player');
    if (existingIframe) {
      existingIframe.remove();
    }
    
    iframe.id = 'youtube-audio-player';
    document.body.appendChild(iframe);
    setIsPlaying(true);
    
    // Add event listener to handle iframe load
    iframe.onload = () => {
      console.log('YouTube playlist loaded successfully');
    };
    
    iframe.onerror = () => {
      console.error('Failed to load YouTube playlist');
      setIsPlaying(false);
    };
  };

  const stopAudio = () => {
    const iframe = document.getElementById('youtube-audio-player');
    if (iframe) {
      iframe.remove();
    }
    setIsPlaying(false);
  };

  return (
    <VinylContext.Provider value={{
      isRotating,
      selectedRecord,
      isPlaying,
      setVinylState,
      stopVinyl,
      playAudio,
      stopAudio
    }}>
      {children}
    </VinylContext.Provider>
  );
};

// Export the context for use in the hook file
export { VinylContext };
