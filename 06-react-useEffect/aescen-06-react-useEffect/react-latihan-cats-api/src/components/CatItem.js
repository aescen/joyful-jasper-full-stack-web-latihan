export default function CatItem({ image, name, origin }) {
  const handleClick = () => {
    alert(name)
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
        src={image.url}
        alt={name}
      />
      <div style={{ marginLeft: '16px' }}>
        <h3>{name}</h3>
        <h4>{origin}</h4>
      </div>
    </div>
  )
}
