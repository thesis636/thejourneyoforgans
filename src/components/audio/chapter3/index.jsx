import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/audio.mp3";

export function AudioChapter3() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  function onPlay() {
    const audio = document.getElementById("audio-chapter-3");
    audio.play();
  }

  function onPause() {
    const audio = document.getElementById("audio-chapter-3");
    audio.pause();
  }
  React.useEffect(() => {
    if (backgroundReducer.chapter === "3") {
      onPlay();
    }

    if (backgroundReducer.chapter !== "3") {
      onPause();
    }
  }, [backgroundReducer.chapter]);
  return (
    <audio id="audio-chapter-3">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default AudioChapter3;
