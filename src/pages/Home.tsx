import { supabase } from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { AlbumCard } from "../components/AlbumCard";

export interface Album {
  id: number;
  created_at: Date;
  album_title: string;
  album_artist: string;
  tracklist: string;
  rating: number;
}

const Home = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [albums, setAlbums] = useState<Array<Album> | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      const { data, error } = await supabase.from("albums").select();

      if (error) {
        setFetchError("Could not fetch data");
        setAlbums(null);
      }
      if (data) {
        setAlbums(data);
        setFetchError(null);
      }
    };
    fetchAlbums();
  }, []);

  return (
    <div>
      {fetchError ? <p>{fetchError}</p> : null}
      {albums ? (
        <div>
          {albums.map((album) => (
            <AlbumCard album={album} key={album.id} />
          ))}
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Home;
