import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading . . .</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <div>평점: {movie.rating}</div>
          <div>상영 시간: {movie.runtime}분</div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <div>{movie.description_full}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
