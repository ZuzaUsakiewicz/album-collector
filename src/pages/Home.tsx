import { supabase } from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { AlbumCard } from "../components/AlbumCard";
import { FlexRowCenter } from "../theme/styleHelpers";
import styled from "styled-components";

export interface Album {
  id: number;
  created_at: Date;
  album_title: string;
  album_artist: string;
  tracklist: string;
  rating: number;
}

const AlbumsContainer = styled.section`
  ${FlexRowCenter};
  gap: 2rem;
  flex-wrap: wrap;
  padding: 3rem;
`;

const Home: React.FC = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [albums, setAlbums] = useState<Array<Album> | null>(null);

  const handleDelete = (id: number) => {
    setAlbums((prevAlbums: any) => {
      return prevAlbums?.filter((album: any) => album.id !== id);
    });
  };

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
        <AlbumsContainer>
          {albums.map((album) => (
            <AlbumCard album={album} key={album.id} onDelete={handleDelete} />
          ))}
        </AlbumsContainer>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Home;
