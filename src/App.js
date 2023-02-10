import logo1 from './assets/logo-1.png';
import map from './assets/map.png';
import LivingCost from './LivingCost.jsx';
import Cards from './Cards.jsx';
import Pink from './Pink.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';
import { FiChevronDown, FiSearch } from "react-icons/fi";


function App() {
  return (
    <div className=''>
    <div className="h-screen px-7 bg-[url(./assets/house.png)]">
      <nav className='flex items-center'>
      <img src={ logo1 } alt="Logo" className=''/>
      <div className='grid place-items-center'>
        <div className='flex justify-between items-center m-4 ml-5 text-white list-none'>
          <li className='m-5 text-underline'>Home</li>
          <li className='m-5'>Landlord</li>
          <li className='m-5'>Tenants</li>
          <li className='m-5'>Contact Us</li>
        </div>
        </div>
      </nav>
      <hr />
      <div className='flex justify-around items-center'>
      <div className='text-white font-bold text-3xl my-5'>
        <h1 className=''>The Most Affordable<br/>Place To Stay In The <br/>San Francisco Bay Area</h1>
      </div>
      <div>
        <img src={map} alt='map' />
        <div className='flex justify-center w-[85%] h-[12vh] bg-white rounded ml-8'>
          <div className='flex items-center justify-center rounded bg-white border-solid border-2 border-gray-300 my-4 ml-4'>
            <div className='flex justify-center items-center p-2 border-r-2'>
              <p className='px-4'>All Type</p>
              <FiChevronDown />
            </div>
            <div className='flex justify-center items-center'>
              <p className='px-4'>Neighborhood</p>
              <FiChevronDown />
            </div>
            
          </div>
          <div className='bg-blue-400 my-4 mr-4 ml-0 items-center flex px-4'>
              <FiSearch />
            </div>
        </div>
      </div>
      </div>
      </div>
      <LivingCost />
      <Cards />
      {/* <Form /> */}
      <Pink />
      <Footer />
    </div>
  );
}

export default App;
