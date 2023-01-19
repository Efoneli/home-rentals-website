import logo1 from './assets/logo-1.png';
import swimmingpool from './assets/swimmingpool.png';

function App() {
  return (
    <div className=''>
    <div className="h-screen px-7 bg-[url(./assets/house.png)]">
      <nav className='flex '>
      <img src={ logo1 } alt="Logo" className=''/>;
        <div className='flex justify-between itemscenter m-4 ml-5 text-white '>
          <li className='m-5'>Home</li>
          <li className='m-5'>Landlord</li>
          <li className='m-5'>Tenants</li>
          <li className='m-5'>Contact Us</li>
        </div>
      </nav>
      <hr />
      <div>
      <div className='text-white font-bold text-3xl my-5'>
        <h1 className=''>The Most Affordable<br/>Place To Stay In The <br/>San Francisco Bay Area</h1>
      </div>
      <div>

      </div>
      </div>
      </div>
      <div className='bg-white'>
        <h2 className='text-2xl font-bold mt-11 ml-11'>Minimum Living Cost Takes Care Of Everthing</h2>
        <div>
          <img src={ swimmingpool } alt='pool' />
        </div>
      </div>
      <div>
        <div className='flex justify-between mx-8 my-6'>
          <h1 className='text-2xl font-bold'>List Of Properties</h1>
          <button className='bg-orange-700 text-white text-sm rounded-sm px-3 py-2'>
            View All Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
