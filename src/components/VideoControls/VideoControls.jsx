import React from "react";
import styled from "styled-components";

import PlayIcon from "../../icons/play";
import PauseIcon from "../../icons/pause";

const VideoControlsWrapper = styled.div`
  margin: 0 20px;
  width: calc(100% - 40px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Timestamp = styled.div`
  align-self: flex-end;
  right: 0;
`;

const TimeTrack = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;

  &::-moz-range-track {
    height: 5px;
    background: rgba(83, 100, 110, 0.5);
    border: none;
  }

  &::-moz-range-thumb {
    border: none;
    height: 20px;
    width: 20px;
    background: #ffffff;
    border-radius: 50%;
  }

  &::-moz-range-progress {
    background: #4794be;
  }
`;

const ShowLaneButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const ShowLaneButton = styled.button`
  grid-column: 1/2;
  background: transparent;
  border: none;
  color: #4794be;
  font-size: 1rem;
  font-weight: bold;
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
`;

const TogglePlayButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TogglePlayButton = styled.button`
  grid-column: 2/3;
  background: transparent;
  border: none;
  margin: auto 0;
  height: 50px;
  width: 50px;
`;

const VideoControls = ({ playerState, togglePlay, handleVideoProgress, setLaneVisible }) => {
  return (
    <VideoControlsWrapper>
      <Timestamp>{playerState.currentTime}</Timestamp>
      <TimeTrack type="range" min="0" max="100" value={playerState.progress} onChange={(e) => handleVideoProgress(e)} />
      <ButtonsWrapper>
        <ShowLaneButtonWrapper>
          <ShowLaneButton onClick={() => setLaneVisible(true)}>Ähnliche Videos</ShowLaneButton>
        </ShowLaneButtonWrapper>
        <TogglePlayButtonWrapper>
          <TogglePlayButton onClick={togglePlay} data-test-id="toggle-play-button">
            {playerState.isPlaying ? <PauseIcon /> : <PlayIcon />}
          </TogglePlayButton>
        </TogglePlayButtonWrapper>
      </ButtonsWrapper>
    </VideoControlsWrapper>
  );
};

export default VideoControls;
