import { useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "../theme/styleComponents";

const NewAlbum: React.FC = () => {
  const navigate = useNavigate();

  const [album_title, setAlbumTitle] = useState<string>("");
  const [album_artist, setAlbumArtist] = useState<string>("");
  const [tracklist, setTracklist] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!album_title || !album_artist || !tracklist || !rating) {
      setFormError("please fill all the fields");
      return;
    }

    const { data, error } = await supabase
      .from("albums")
      .insert([{ album_title, album_artist, tracklist, rating }])
      .select();

    if (error) {
      console.log(error);
      setFormError("please fill all the fields");
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="albumTitle">Album title:</label>
        <input
          type="text"
          value={album_title}
          onChange={(e) => setAlbumTitle(e.target.value)}
        />
        <label htmlFor="albumArtist">Album artist:</label>
        <input
          type="text"
          value={album_artist}
          onChange={(e) => setAlbumArtist(e.target.value)}
        />
        <label htmlFor="tracklist">Tracklist:</label>
        <textarea
          value={tracklist}
          rows={6}
          onChange={(e) => setTracklist(e.target.value)}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button> Create album</button>
        {formError && <p>{formError}</p>}
      </Form>
    </Container>
  );
};

export default NewAlbum;
