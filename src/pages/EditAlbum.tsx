import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import { Container, Form } from "../theme/styleComponents";

const EditAlbum: React.FC = () => {
  const { id } = useParams();
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
      .update({ album_title, album_artist, tracklist, rating })
      .eq("id", id)
      .select();

    if (error) {
      setFormError("Please fill all fields correctly");
    }
    if (data) {
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      const { data, error } = await supabase
        .from("albums")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setAlbumTitle(data.album_title);
        setAlbumArtist(data.album_artist);
        setTracklist(data.tracklist);
        setRating(data.rating);
        console.log(data);
      }
    };
    fetchAlbum();
  }, [id, navigate]);

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
        <label htmlFor="rating">rating:</label>
        <input
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button> edit album</button>
        {formError && <p>{formError}</p>}
      </Form>
    </Container>
  );
};

export default EditAlbum;
