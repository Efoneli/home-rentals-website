import React from 'react'
import bedroom from './assets/bedroom.png';
import extHouse from './assets/extHouse.png';
import couch from './assets/couch.png';
import couch2 from './assets/couch2.png';
import couch3 from './assets/couch3.png';
import stairs from './assets/stairs.png';
import stairs2 from './assets/stairs2.png';
import Size from './assets/Size.svg';
import Shower from './assets/Shower.svg';
import Bed from './assets/Bed.svg';


function Cards(props) { 
  return (
    <div className='mx-11'>
        <div className='flex justify-between my-6 '>
          <h1 className='text-2xl font-bold'>List Of Properties</h1>
          <button className='bg-orange-700 text-white text-sm rounded-sm px-3 py-2'>
            View All Property
          </button>
        </div>
        <div className='container grid gap-2 place-items-center lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1'>
            <div className='bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-lg shadow-black'>
                <img src={bedroom} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold text-xl pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2 font-bold text-xl'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                </div>
            </div>
            
            <div className='bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-md shadow-black'>
                <img src={extHouse} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold text-xl pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2 font-bold text-xl'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                </div>
            </div>

            <div className='bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-md shadow-black'>
                <img src={couch2} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold text-xl pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2 font-bold text-xl'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                </div>
            </div>

            <div className='bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-md shadow-black'>
                <img src={couch} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold text-xl pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2 font-bold text-xl'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                </div>
            </div>

            <div className='bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-md shadow-black'>
                <img src={stairs} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold text-xl pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2 font-bold text-xl'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                </div>
            </div>

            <div className='bg-white h-[1/3] w-[53.3vh] rounded-3xl my-5 shadow-md shadow-black'>
                <img src={stairs2} alt='bedroom' className='object-cover'/>
                <h2 className='font-bold text-xl py-2 px-3'>
                2578 Folsom Street, San Francisco, CA, 94110
                </h2>
                <p className='text-sm text-gray-300  pt-2 px-3'>Private Room</p>
                <p className='text-orange-500 font-bold text-xl pb-4 px-3'>$1200/Month</p>
                <div className='flex justify-around items-center border-t-2'>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5'>
                  <img src={Bed} alt='icon' />
                    <p className='p-2 font-bold text-xl'>4</p>
                  </div>
                  <div className='flex justify-around items-center border-r-2 px-4 py-5 '>
                  <img src={Shower} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                  <div className='flex justify-around items-center p-4'>
                  <img src={Size} alt='icon' />
                    <p className='p-2 font-bold text-xl'>2</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards