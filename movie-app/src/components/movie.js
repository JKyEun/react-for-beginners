import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImage} alt='영화 포스터' />
      <p>{summary}</p>
      <ul>
        {genres.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
