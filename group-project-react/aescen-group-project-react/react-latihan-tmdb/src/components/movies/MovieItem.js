import { useNavigate } from 'react-router-dom';

export default function MovieItem({ movie }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${movie.id}`)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: '300px',
        display: 'flex',
        textAlign: 'left',
        padding: '8px',
        margin: '16px 8px',
        backgroundColor: '#5698aa',
        color: 'white',
        borderRadius: '8px',
      }}
    >
      <img
        width='100px'
        style={{ objectFit: 'cover', borderRadius: '8px', }}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div style={{ marginLeft: '16px' }}>
        <h3>{movie.title}</h3>
        <br />
        <p style={{ fontSize: '16px' }}>Released: {movie.release_date}</p>
        <p style={{ fontSize: '16px' }}>Rating: {movie.vote_average}</p>
      </div>
    </div>
  )
}
