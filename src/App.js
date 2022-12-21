import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import "./assets/fonts/fontawesome-free-6.1.1-web/fontawesome-free-6.1.1-web/css/all.min.css";
import DataSongs from "./data/songs.json";
import PlayingSong from "./components/PlayingSong";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  console.log(song);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <NavBar />
        <div className="grid grid-cols-3 bg-slate-600 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSongs />
        </div>
        <PlayingSong />
      </Songs.Provider>
    </div>
  );
}

export default App;
