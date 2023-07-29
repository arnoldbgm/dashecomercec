import {
  RiAddLine,
  RiMenu3Fill,
  RiPieChartLine,
  RiUser3Line,
  RiCloseCircleLine,
  RiSearch2Line,
} from 'react-icons/ri';
import Sidebar from './components/shared/sidebar';
import { useState } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='bg-[#2D2B37] w-full min-h-screen'>
      <Sidebar showMenu={showMenu} />
      {/* Menu Movil */}
      <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-3 px-8 flex items-center justify-between rounded-tl-3xl rounded-tr-3xl'>
        <button>
          <RiUser3Line />
        </button>
        <button>
          <RiAddLine />
        </button>
        <button>
          <RiPieChartLine />
        </button>
        <button onClick={toogleMenu}>
          {showMenu ? (
            <RiCloseCircleLine className='text-white' />
          ) : (
            <RiMenu3Fill />
          )}
        </button>
      </nav>
      {/* Menu Main */}
      <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
        <div className='lg:col-span-6'>
          {/* Header */}
          <header className='p-4'>
            {/* Title and search */}
            <div className='flex flex-col gap-4 mb-6'>
              {/* Start title search */}
              <div>
                <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
                <p className='text-gray-500'>07 octubre 2022</p>
              </div>
              {/* End title search */}
              <form>
                <div className='w-full relative'>
                  <RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
                  <input className='bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none' />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav>
              <a href=""></a>
            </nav>
          </header>
          {/* End Header */}
        </div>
        <div className='lg:col-span-2 bg-blue-400 fixed lg:static right-0'>
          Carrtio
        </div>
      </main>
    </div>
  );
}

export default App;
