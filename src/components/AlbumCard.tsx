import React from "react";
import { supabase } from "../config/supabaseClient";
import { Link } from "react-router-dom";
import { Album } from "../pages/Home";
import styled from "styled-components";
import {
  BoxShadow,
  BoxShadowHover,
  FlexRowCenter,
  FlexRowStart,
} from "../theme/styleHelpers";
import { AlbumArtist, AlbumTitle } from "../theme/styleComponents";
import { mediaQueries } from "../theme/mediaQueries";

type Props = {
  album: Album;
  onDelete: (id: number) => void;
};

const AlbumCardContainer = styled.div`
  position: relative;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardColor};
  border-radius: 1rem;
  width: 20rem;
  height: 10rem;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-transform: capitalize;
  ${BoxShadow};
  cursor: pointer;
  @media ${mediaQueries.laptop} {
    &:hover {
      background: ${({ theme }) => theme.colors.cardHoverColor};
      transform: translateY(-0.3rem);
      ${BoxShadowHover};
    }
  }
`;

const Rating = styled.div`
  ${FlexRowCenter};
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 50%;
  padding: 1.5rem;
  width: 2rem;
  height: 2rem;
`;

const IconsContainer = styled.div`
  ${FlexRowStart};
  padding: 3rem 0 0 0.5rem;
`;

export const AlbumCard: React.FC<Props> = ({ album, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("albums")
      .delete()
      .eq("id", album.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(album.id);
      // notification
    }
  };

  return (
    <Link to={`/details/${album.id}`}>
      <AlbumCardContainer>
        <AlbumTitle>{album.album_title}</AlbumTitle>
        <AlbumArtist>
          <span>by </span> {album.album_artist}
        </AlbumArtist>
        <IconsContainer>
          <Link to={`/edit/${album.id}`}>
            <span
              className="material-symbols-outlined"
              aria-label="edit album"
              role="img"
            >
              edit
            </span>
          </Link>
          <span
            className="material-symbols-outlined"
            aria-label="delete album"
            role="img"
            onClick={handleDelete}
          >
            delete
          </span>
        </IconsContainer>
        <Rating>
          <span className="material-symbols-outlined">workspace_premium</span>
          {album.rating}
        </Rating>
      </AlbumCardContainer>
    </Link>
  );
};
