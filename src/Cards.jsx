import React from 'react'
import data from './data.js';

function Cards(props) {
    console.log(props)
  return (
    <>
        <div className='flex justify-between mx-8 my-6'>
          <h1 className='text-2xl font-bold'>List Of Properties</h1>
          <button className='bg-orange-700 text-white text-sm rounded-sm px-3 py-2'>
            View All Property
          </button>
        </div>
        <div>
        <ul>
      {props.data.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
            {/* <img src={props.image} alt='image'/>
            <h1>{props.title}</h1> */}
        </div>
    </>
  )
}

export default Cards