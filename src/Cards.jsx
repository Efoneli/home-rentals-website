import React from 'react'
import bedroom from './assets/bedroom.png';
import Size from './assets/Size.svg';
import Shower from './assets/Shower.svg';
import Bed from './assets/Bed.svg';


function Cards(props) { 
  return (
    <div className='mx-11'>
        <div className='flex justify-between  my-6 bg-red-500'>
          <h1 className='text-2xl font-bold'>List Of Properties</h1>
          <button className='bg-orange-700 text-white text-sm rounded-sm px-3 py-2'>
            View All Property
          </button>
        </div>
        <div className=''>
            <div className='bg-white h-[1/3] w-[250px] rounded-lg my-5 shadow-md shadow-black'>
                <img src={bedroom} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110'
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2'>2</p>
                  </div>
                </div>
            </div>

        {/* <ul>
      {props.data.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul> */}
            {/* <img src={props.image} alt='image'/>
            <h1>{props.title}</h1> */}
        </div>
    </div>
  )
}

export default Cards