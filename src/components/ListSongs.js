import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  const [idSong, setIdSong] = useState(song.id);
  const [position, setPosition] = useState(0);
  console.log(DataSongs);
  const handleClickSong = (id) => {
    setIdSong(id);
    handleSetSong(id);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song.id]);

  const scrollTo = (pos) => {
    window.scrollY(position + pos);
  };
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th>Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i class="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-700 h-12 text-gray-400 hover:bg-gray-500 hover:text-gray-100 ${
                idSong === song.id && "text-teal-400 bg-gray-500"
              } `}
              onClick={() => handleClickSong(song.id)}
            >
              <th>{index + 1}</th>
              <th>{song.name}</th>
              <th>{song.author}</th>
              <th>
                <a href={song.url}>
                  {" "}
                  <i class="fa-solid fa-download"></i>{" "}
                </a>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
