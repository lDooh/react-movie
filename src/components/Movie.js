import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, coverImage, title, summary, genres}) {
    return (
    <div>
        <img src={coverImage} alt={title}></img>
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((genre, index) => (
                <li key={genre}>{genre}</li>
            ))}
        </ul>
    </div>
    );
}

Movie.prototypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;