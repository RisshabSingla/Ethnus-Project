import { useState, useRef } from "react";

import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

import "./index.css";
const tracks = [
  {
    title: "Apna Bale Le",
    src: "./music/1.mp3",
    author: "Trinix ft Rushawn",
    thumbnail: "./images/3.jpeg",
  },
  {
    title: "Chaand_Baaliyan",
    src: "./music/2.mp3",
    author: "Trinix ft Rushawn",
    thumbnail: "./images/3.jpeg",
  },
  // ...
];

function AudioPlayer() {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <div className="audio-player w-screen">
      <div className=" inner">
        <div className="flex  justify-between">
          <div className="">
            <DisplayTrack
              currentTrack={currentTrack}
              audioRef={audioRef}
              progressBarRef={progressBarRef}
              setDuration={setDuration}
              handleNext={handleNext}
            />
          </div>
          <Controls
            audioRef={audioRef}
            progressBarRef={progressBarRef}
            duration={duration}
            setTimeProgress={setTimeProgress}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            handleNext={handleNext}
            timeProgress={timeProgress}
          />
          <ProgressBar
            progressBarRef={progressBarRef}
            timeProgress={timeProgress}
            audioRef={audioRef}
            duration={duration}
          />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
