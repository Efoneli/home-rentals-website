import logo1 from './assets/logo-1.png';

function App() {
  return (
    <div>
    <div className="h-screen px-7 bg-[url(./assets/house.png)]">
      <nav className='flex p-4'>
      <img src={ logo1 } alt="Logo" className='m-4'/>;
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
        <h1>The Most Affordable<br/>Place To Stay In The <br/>San Francisco Bay Area</h1>
      </div>
      <div>

      </div>
      </div>
      </div>
      <div className=''>
        <h2 className='text-2xl font-bold'>Minimum Living Cost Takes Care Of Everthing</h2>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
