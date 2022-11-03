import React from "react";
import { Album } from "../pages/Home";

type Props = {
  album: Album;
};

export const AlbumCard: React.FC<Props> = ({ album }) => {
  return (
    <div>
      <h2>{album.album_title}</h2>
    </div>
  );
};
