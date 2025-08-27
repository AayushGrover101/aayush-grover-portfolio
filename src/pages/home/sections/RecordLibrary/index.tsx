import React from "react";
import { styled } from "styled-components";
import { 
  RecordBase, 
  RecordNeedle, 
  RecordBillie, 
  RecordChuck, 
  RecordLaufey1, 
  RecordLaufey2, 
  RecordLaufey3, 
  RecordLaufey4, 
  RecordWicked,
  BillieCover,
  ChuckCover,
  Laufey1Cover,
  Laufey2Cover,
  Laufey3Cover,
  Laufey4Cover,
  WickedCover
} from "../../../../assets/img";
import { useVinyl } from "../../../../contexts/useVinyl";
import { VINYL_AUDIO_URLS } from "../../../../constants/vinyl";

const RecordLibraryContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin-top: 20px;
`;

const RecordPlayerSection = styled.div`
  grid-column: 2 / span 3;
  grid-row: 1 / span 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecordImage = styled.img<{ zIndex: number; isRotating?: boolean }>`
  position: absolute;
  z-index: ${props => props.zIndex};
  width: 96%;
  height: 96%;
  object-fit: contain;
  transition: transform 0.3s ease;
  transform-origin: 47.5% 52%;
  animation: ${props => props.isRotating ? 'rotate 1s linear infinite' : 'none'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const GridRecord = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const GridCell = styled.div<{ gridColumn: number; gridRow: number }>`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const RecordOverlay = styled.img`
  position: absolute;
  width: 75px;
  height: 75px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const GridCellWithHover = styled(GridCell)`
  &:hover ${RecordOverlay} {
    opacity: 1;
  }
`;




const Heading = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const Subheading = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const RecordLibrary: React.FC = () => {
  const { isRotating, selectedRecord, setVinylState, playAudio, stopAudio } = useVinyl();

  const handleRecordClick = (recordSrc: string) => {
    // Stop any currently playing audio
    stopAudio();
    
    // Set the vinyl state
    setVinylState(true, recordSrc);
    
    // Play the corresponding audio
    const audioUrl = VINYL_AUDIO_URLS[recordSrc];
    if (audioUrl) {
      playAudio(audioUrl);
    }
  };

  const getCurrentRecordSrc = () => {
    return selectedRecord || RecordBase;
  };

  return (
    <div>
      <Heading>Vinyl Collection</Heading>
      <Subheading>Play a record from my collection :)</Subheading>
      
      <RecordLibraryContainer>
        {/* Record Player in top right */}
        <RecordPlayerSection>
          <RecordImage src={getCurrentRecordSrc()} alt="Record Base" zIndex={1} isRotating={isRotating} />
          <RecordImage src={RecordNeedle} alt="Record Needle" zIndex={2} style={{border: "2px solid black" }} />
        </RecordPlayerSection>

        <GridCellWithHover gridColumn={1} gridRow={1}>
          <GridRecord 
            src={BillieCover} 
            alt="Billie Eilish Cover" 
            onClick={() => handleRecordClick(RecordBillie)}
          />
          <RecordOverlay src={RecordBillie} alt="Billie Eilish Record" />
        </GridCellWithHover>
        <GridCellWithHover gridColumn={1} gridRow={2}>
          <GridRecord 
            src={Laufey1Cover} 
            alt="Laufey Cover 1" 
            onClick={() => handleRecordClick(RecordLaufey1)}
          />
          <RecordOverlay src={RecordLaufey1} alt="Laufey Record 1" />
        </GridCellWithHover>
        <GridCellWithHover gridColumn={1} gridRow={3}>
          <GridRecord 
            src={Laufey2Cover} 
            alt="Laufey Cover 2" 
            onClick={() => handleRecordClick(RecordLaufey2)}
          />
          <RecordOverlay src={RecordLaufey2} alt="Laufey Record 2" />
        </GridCellWithHover>
        <GridCellWithHover gridColumn={1} gridRow={4}>
          <GridRecord 
            src={Laufey3Cover} 
            alt="Laufey Cover 3" 
            onClick={() => handleRecordClick(RecordLaufey3)}
          />
          <RecordOverlay src={RecordLaufey3} alt="Laufey Record 3" />
        </GridCellWithHover>
        <GridCellWithHover gridColumn={2} gridRow={4}>
          <GridRecord 
            src={Laufey4Cover} 
            alt="Laufey Cover 4" 
            onClick={() => handleRecordClick(RecordLaufey4)}
          />
          <RecordOverlay src={RecordLaufey4} alt="Laufey Record 4" />
        </GridCellWithHover>
        <GridCellWithHover gridColumn={3} gridRow={4}>
          <GridRecord 
            src={WickedCover} 
            alt="Wicked Cover" 
            onClick={() => handleRecordClick(RecordWicked)}
          />
          <RecordOverlay src={RecordWicked} alt="Wicked Record" />
        </GridCellWithHover>
        <GridCellWithHover gridColumn={4} gridRow={4}>
          <GridRecord 
            src={ChuckCover} 
            alt="Chuck Berry Cover" 
            onClick={() => handleRecordClick(RecordChuck)}
          />
          <RecordOverlay src={RecordChuck} alt="Chuck Berry Record" />
        </GridCellWithHover>
      </RecordLibraryContainer>
    </div>
  );
};

export default RecordLibrary;