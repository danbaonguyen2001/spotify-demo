import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function DetailSong() {
  const { song } = useContext(Songs);
  const [curSong, setCurSong] = useState(song);
  useEffect(() => {
    setCurSong(song);
  }, [song.id]);
  return (
    <div className="col-span-1 p-3 text-left">
      <h2 className="text-cyan-600 font-bold">Now playing</h2>
      <h1 className="text-gray-400 text-xl">{curSong.name}</h1>
      <div className="flex flex-row md:flex-col justify-center">
        <div className="w-[120px] xl:w-[240px] m-auto mt-4">
          <img
            className="w-full"
            src={curSong.links.images[0].url}
            alt="avatar"
          />
        </div>
        <div className="flex justify-evenly items-center gap-4 mt-4">
          <img
            className="w-[80px] rounded-full text-xl"
            src={curSong.links.images[1].url}
            alt="avatar"
          />
          <span className="text-white text-xl">{curSong.author}</span>
        </div>
      </div>
    </div>
  );
}
