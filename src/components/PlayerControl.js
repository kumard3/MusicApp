import React, { useEffect, useState } from "react";
import Player from "./Player";
import axios from "axios";

import "./playercontrol.css";
function PlayerControl() {
  const [songs, setSongs] = useState([]);

  const [currentSongIndex, setCurrentSongIndex] = useState(1);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  const [musicPerPage, setMusicPerPage] = useState(1);

  const url = "https://free-audios-api.herokuapp.com/audio";
  useEffect(() => {
    async function getData() {
      const request = await axios.get(url);
      setSongs(request.data);
      console.log(request.data);
      return request;
    }
    getData();
  }, [url]);

  const indexofLastPost = currentSongIndex * musicPerPage;
  const indexofFirstPost = indexofLastPost - musicPerPage;
  const currentPost = songs.slice(indexofFirstPost, indexofLastPost);
  return (
    <div className="playercontrol">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        currentPost={currentPost}
      />
    </div>
  );
}

export default PlayerControl;
