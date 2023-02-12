import React from 'react'
import 

const NewCard = ({ image, title, type, rate }) => {
  return (
    <div>
        <div>
            <img src={image} alt='photo' />
        </div>
        <h2>{title}</h2>
        <h3>{type}</h3>
        <p>{rate}</p>

    </div>
  )
}

export default NewCard