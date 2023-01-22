import logo1 from './assets/logo-1.png';
import LivingCost from './LivingCost.jsx';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className=''>
    <div className="h-screen px-7 bg-[url(./assets/house.png)]">
      <nav className='flex items-center'>
      <img src={ logo1 } alt="Logo" className=''/>
      <div className='grid place-items-center'>
        <div className='flex justify-between items-center m-4 ml-5 text-white list-none'>
          <li className='m-5'>Home</li>
          <li className='m-5'>Landlord</li>
          <li className='m-5'>Tenants</li>
          <li className='m-5'>Contact Us</li>
        </div>
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
      <LivingCost />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
