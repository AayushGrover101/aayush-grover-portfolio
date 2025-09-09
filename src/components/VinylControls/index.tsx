import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useVinyl } from '../../contexts/useVinyl';
import { VINYL_NAMES } from '../../constants/vinyl';
import { theme } from "src/styles";


const GlobalStopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.2s ease;
  pointer-events: none;
  
  &.visible {
    opacity: 1;
    cursor: pointer;
    pointer-events: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const StopIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${theme.colors.primary.red};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StopIconInner = styled.div`
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 2px;
`;



const NowPlayingNotification = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  background: rgba(118, 118, 118, 0.9);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  &.immediate-hide {
    transition: none;
  }
`;

const VinylControls: React.FC = () => {
  const { isRotating, selectedRecord, stopVinyl, stopAudio, isPlaying } = useVinyl();
  const [showNotification, setShowNotification] = useState(false);
  const [immediateHide, setImmediateHide] = useState(false);

  useEffect(() => {
    if (isRotating && selectedRecord) {
      setShowNotification(true);
      setImmediateHide(false);
      // Auto-hide notification after 3 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      setShowNotification(false);
      setImmediateHide(false);
    }
  }, [isRotating, selectedRecord]);

  const handleStopVinyl = () => {
    setImmediateHide(true);
    setShowNotification(false);
    stopAudio(); // Stop the audio first
    stopVinyl();
  };

  const getCurrentVinylName = () => {
    return selectedRecord ? VINYL_NAMES[selectedRecord] : null;
  };

  return (
    <>
      {/* Global Stop Button */}
      <GlobalStopButton 
        className={isRotating ? 'visible' : ''} 
        onClick={handleStopVinyl}
        title="Stop playing vinyl"
      >
        <StopIcon>
          <StopIconInner />
        </StopIcon>
      </GlobalStopButton>

      {/* Now Playing Notification */}
      <NowPlayingNotification className={`${showNotification ? 'visible' : ''} ${immediateHide ? 'immediate-hide' : ''}`}>
        Now playing: {getCurrentVinylName()}
        {isPlaying && <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.8 }}>Audio playing</div>}
      </NowPlayingNotification>
    </>
  );
};

export default VinylControls;
