import { useEffect, useState } from "react";
import Player from "./components/Player";
import axios from "axios";
import Pagination from "./components/Pagination";

function App() {
  const [songs, setSongs] = useState([]);
  
  const [currentSongIndex, setCurrentSong] = useState(1);
  const [previousSongIndex, setPreviousSongIndex] = useState(currentSongIndex - 1);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  const [musicPerPage , setMusicPerPage] = useState(1);

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
  const indexofFirstPost  = indexofLastPost - musicPerPage;
  const currentPost =   songs.slice(indexofFirstPost,indexofLastPost)

  const paginate = (pageNumber) => setCurrentSong(pageNumber)


  return (
    <div className="app">
        <Player  song={currentPost} />
        <Pagination musicPerPage={musicPerPage} totalPosts={songs.length}  paginate={paginate} />

    </div>
  );
}

export default App;
