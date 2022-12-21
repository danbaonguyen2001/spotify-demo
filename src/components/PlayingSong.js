import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

export default function PlayingSong() {
  const { song, handleSetSong, DataSongs } = useContext(Songs);
  const handleClickNext = () => {
    if (song.id < DataSongs.length - 1) {
      handleSetSong(song.id + 1);
    } else {
      handleSetSong(0);
    }
  };
  const handleClickPrevious = () => {
    if (song.id >= 1) {
      handleSetSong(song.id - 1);
    } else {
      handleSetSong(DataSongs.length - 1);
    }
  };
  const handleEnded = () => {};
  return (
    <div>
      <AudioPlayer
        className="playing__music"
        src={song.url}
        autoPlay
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleEnded}
      />
    </div>
  );
}
