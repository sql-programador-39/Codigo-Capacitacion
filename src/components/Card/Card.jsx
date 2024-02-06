import './Card.css'
import { useState } from 'react'

const Card = ({item}) => {

  const { name, description, value } = item

  const [ color, setColor ] = useState(false)

  const handleClick = () => {
    setColor(!color)
  }

  return (
    <>
      { value < 1000 ? (
        <div className={color ? 'card2' : 'card'}
        onClick={handleClick}
        >
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{value}</p>
        </div>
      ) : (
        <p>mayor a mil</p>
      )}
        
    </>
  )
}

export default Card
