import React from 'react'

const NewCard = ({ url, title, type, rate }) => {
  return (
    <div>
        <div>
            <img src={url} alt='photo' />
        </div>
        <h2>{title}</h2>
        <h3>{type}</h3>
        <p>{rate}</p>

    </div>
  )
}

export default NewCard