import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import { Container } from "../theme/styleComponents";

const AlbumDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState<any>();

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
        setAlbum(data);
      }
    };
    fetchAlbum();
  }, [id, navigate]);

  return (
    <Container>
      {album ? (
        <div>
          <p> {album.album_title} </p>
          <p>{album.tracklist}</p>
          <Link to={`/edit/${album.id}`}>
            <span
              className="material-symbols-outlined"
              aria-label="edit album"
              role="img"
            >
              edit
            </span>
          </Link>
        </div>
      ) : (
        "loading"
      )}
    </Container>
  );
};

export default AlbumDetails;
