import React from "react";
import styled from "styled-components";

import useVideoPlayer from "../../utils/useVideo";
import { VideoControls } from "../components";

const BottomContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 30%;
  max-height: 300px;
`;

const Logo = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Player = ({ asset, setLaneVisible }) => {
  const videoRef = React.useRef(null);
  const { playerState, togglePlay, handleOnTimeUpdate, handleVideoProgress } = useVideoPlayer(videoRef.current);
  return (
    <>
      {/* Browsers do not allow unmuted autoplay at initial load, if there is no prior user interaction. If prior interactions are added, muted can be removed  */}
      <video ref={videoRef} src={asset.trailer} onTimeUpdate={handleOnTimeUpdate} muted autoPlay />
      <BottomContainer>
        {asset.logo ? (
          <Logo>
            <img src={asset.logo || undefined} alt="logo" />
          </Logo>
        ) : (
          <Title>{asset.title || ""}</Title>
        )}
        <VideoControls playerState={playerState} togglePlay={togglePlay} handleVideoProgress={handleVideoProgress} setLaneVisible={setLaneVisible} />
      </BottomContainer>
    </>
  );
};

export default Player;
