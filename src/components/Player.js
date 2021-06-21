import React, { useState, useEffect, useRef } from "react";
import "react-h5-audio-player/lib/styles.css";
import "./iframe.css";
import PlayerDetails from "./PlayerDetails";

function Player({
  currentPost,
  setCurrentSongIndex,
  currentSongIndex,
  nextSongIndex,
  songs,
}) {
  return (
    <div className="player">
      {currentPost.map((song) => (
        <div className="card-content">
     
          <PlayerDetails
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
            currentPost={currentPost}
          />
        </div>
      ))}
    </div>
  );
}

export default Player;
