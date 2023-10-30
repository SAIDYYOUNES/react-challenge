export default function Color ({ hex, name }) {
  return (
    <div style={{backgroundColor: hex}}
      className='color-square' 
    >
      <h2>{name}</h2>
    </div>
  )
}
