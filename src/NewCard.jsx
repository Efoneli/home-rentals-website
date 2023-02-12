import React from 'react'

const NewCard = ({ image, title, type, rate }) => {
  return (
    <div>
        <div>
            <img src={image} alt={image} />
        </div>
        <h2>{title}</h2>
        <h3>{type}</h3>
        <p>{rate}</p>

    </div>
  )
}

export default NewCard