import React from 'react'
// import {data} from './data.js';
import swimmingpool from './assets/swimmingpool.png';
import Vector1 from './dataAssets/Vector1.png'
import Vector2 from './dataAssets/Vector2.png'
import Vector3 from './dataAssets/Vector3.png'
import Vector4 from './dataAssets/Vector4.png'
import Vector5 from './dataAssets/Vector5.png'
import Vector6 from './dataAssets/Vector6.png'



// const LivingCost = () => {
//   const project = data;
function LivingCost() {
  return (
    <div className='  mt-11 '>
        <h2 className='text-2xl font-bold ml-11'>Minimum Living Cost Takes Care Of Everthing</h2>
        <div className='flex'>
          <img src={ swimmingpool } alt='pool' />
          <div className='mt-11 grid grid-cols-3 ml-8'>
            <div className='my-4 mx-6 '>
              <img src={Vector1} alt='Vector1' className='bg-white p-2 rounded shadow-lg shadow-[#040c16] hover:scale-110 ease-in-out' />
              <p className='font-bold my-2 py-2'>Pay As Little <br/>As Possible!</p>
            </div>
            <div className='my-4 mx-6 '>
              <img src={Vector2} alt='Vector1' className='bg-white p-2 rounded shadow-lg shadow-[#040c16] hover:scale-110 ease-in-out' />
              <p className='font-bold my-2 py-2'>Enjoy Wisdom <br/>Of Community!</p>
            </div>
            <div className='my-4 mx-6'>
              <img src={Vector3} alt='Vector1' className='bg-white p-2 rounded shadow-lg shadow-[#040c16] hover:scale-110 ease-in-out' />
              <p className='font-bold my-2 py-2'>Let's Somebody Else <br/>Take Care Of Landlord!</p>
            </div>
            <div className='my-4 mx-6'>
              <img src={Vector4} alt='Vector1' className='bg-white p-2 rounded shadow-lg shadow-[#040c16] hover:scale-110 ease-in-out' />
              <p className='font-bold my-2 py-2'>Enjoy Peaceful <br/>Environement!</p>
            </div>
            <div className='my-4 mx-6'>
              <img src={Vector5} alt='Vector1' className='bg-white p-2 rounded shadow-lg shadow-[#040c16] hover:scale-110 ease-in-out' />
              <p className='font-bold my-2 py-2'>Stay Safe! <br/>Save Money!</p>
            </div>
            <div className='my-4 mx-6 '>
              <img src={Vector6} alt='Vector1' className='bg-white p-2 rounded shadow-lg shadow-[#040c16] hover:scale-110 ease-in-out' />
              <p className='font-bold my-2 py-2'>Pay For What <br/>You Use!</p>
            </div>
          </div>



          {/* <div className='bg-red-500'>
            { project.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.icon1})`}}
                className='bg-red-500 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'
                >
                  <img src={item.icon1} alt='icon' />
                {item.title1}
              </div>
            ))}
          </div> */}
        </div>
        <div>
          
        </div>
      </div>
  )
}

export default LivingCost