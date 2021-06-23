import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";

function Player({
  currentSongIndex,
  setCurrentSongIndex,
  nextSongIndex,
  songs,
  loaded,
}) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (loaded) {
      if (isPlaying) {
        audioEl.current.play();
      } else {
        audioEl.current.pause();
      }
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  if (loaded) {
    return (
      <div className="c-player">
        <h1>{songs[currentSongIndex].name}</h1>
        <audio src={songs[currentSongIndex].audio} ref={audioEl}></audio>
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default Player;
