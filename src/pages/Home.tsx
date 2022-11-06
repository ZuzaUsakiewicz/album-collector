import { supabase } from "../config/supabaseClient";
import { useState, useEffect } from "react";
import { AlbumCard } from "../components/AlbumCard";
import { BoxShadow, FlexRowCenter, FlexRowStart } from "../theme/styleHelpers";
import styled from "styled-components";
import { Container } from "../theme/styleComponents";

export interface Album {
  id: number;
  created_at: Date;
  album_title: string;
  album_artist: string;
  tracklist: string;
  rating: number;
}

type Order = {
  typeOfOrder: string;
  ascendIs: boolean;
};

const AlbumsContainer = styled.section`
  ${FlexRowStart};
  gap: 2rem;
  flex-wrap: wrap;
  padding: 3rem;
`;

const OrderBy = styled.div`
  ${FlexRowCenter};
  gap: 0.5rem;
  button {
    padding: 0.3rem 0.6rem;
    border-radius: 0.5rem;
    border: none;
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.cardHoverColor};
    ${BoxShadow};
  }
`;

const Home: React.FC = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [albums, setAlbums] = useState<Array<Album> | null>(null);
  const [orderBy, setOrderBy] = useState<Order>({
    typeOfOrder: "created_at",
    ascendIs: false,
  });

  const handleDelete = (id: number) => {
    setAlbums((prevAlbums: any) => {
      return prevAlbums?.filter((album: any) => album.id !== id);
    });
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      const { data, error } = await supabase
        .from("albums")
        .select()
        .order(orderBy.typeOfOrder, { ascending: orderBy.ascendIs });

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
  }, [orderBy]);

  return (
    <Container>
      {fetchError ? <p>{fetchError}</p> : null}
      <OrderBy>
        <p>Order albums by:</p>
        <button
          onClick={() =>
            setOrderBy({ typeOfOrder: "created_at", ascendIs: false })
          }
        >
          Time Created
        </button>
        <button
          onClick={() =>
            setOrderBy({ typeOfOrder: "album_title", ascendIs: true })
          }
        >
          Album Title
        </button>
        <button
          onClick={() =>
            setOrderBy({ typeOfOrder: "album_artist", ascendIs: true })
          }
        >
          Album Artist
        </button>
        <button
          onClick={() => setOrderBy({ typeOfOrder: "rating", ascendIs: false })}
        >
          Rating
        </button>
      </OrderBy>
      {albums ? (
        <AlbumsContainer>
          {albums.map((album) => (
            <AlbumCard album={album} key={album.id} onDelete={handleDelete} />
          ))}
        </AlbumsContainer>
      ) : (
        "loading"
      )}
    </Container>
  );
};

export default Home;
