import React from "react";

import { secondsToHms } from "./formatTime";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = React.useState({
    isPlaying: true,
    progress: 0,
    currentTime: "00:00:00",
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const handleOnTimeUpdate = () => {
    const progress = (videoElement?.currentTime / videoElement?.duration) * 100 || 0;
    const currentTime = secondsToHms(videoElement?.currentTime || 0);
    setPlayerState({
      ...playerState,
      progress: progress,
      currentTime: currentTime,
    });
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.currentTime = (videoElement.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progress: manualChange,
    });
  };

  React.useEffect(() => {
    if (!videoElement) return;
    playerState.isPlaying ? videoElement.play() : videoElement.pause();
  }, [playerState.isPlaying, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
  };
};

export default useVideoPlayer;
