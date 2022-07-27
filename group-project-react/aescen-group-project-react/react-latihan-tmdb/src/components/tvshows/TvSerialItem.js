import { useNavigate } from 'react-router-dom';

export default function TvSerialItem({ tvSerial }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/tv/${tvSerial.id}`)
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
        src={tvSerial.poster_path}
        alt={tvSerial.name}
      />
      <div style={{ marginLeft: '16px' }}>
        <h3>{tvSerial.name}</h3>
        <br />
        <p style={{ fontSize: '16px' }}>Air Date: {tvSerial.first_air_date}</p>
        <p style={{ fontSize: '16px' }}>Rating: {tvSerial.vote_average}</p>
      </div>
    </div>
  )
}
