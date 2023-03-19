import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading . . .</h1>
      ) : (
        movies.map((el) => {
          return (
            <div key={el.id}>
              <h2>{el.title}</h2>
              <img src={el.medium_cover_image} alt='영화 포스터' />
              <p>{el.summary}</p>
              <ul>
                {el.genres.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
