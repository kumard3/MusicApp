import axios from "axios";
import { useState, useEffect } from "react";
import Player from "./components/Player/Player";

function App() {
  const [songs, setSongs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  useEffect(() => {
    async function getData() {
      const request = await axios.get(
        "https://free-audios-api.herokuapp.com/audio"
      );
      setSongs(request.data);
      setLoaded(true);
    }
    getData();
  }, []);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        loaded={loaded}
      />
    </div>
  );
}

export default App;