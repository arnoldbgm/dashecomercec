import {
  RiHome2Line,
  RiPercentLine,
  RiPieChart2Line,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutBoxRLine,
} from 'react-icons/ri';

const Sidebar = ({ showMenu }) => {
  return (
    <>
      {/* Start SliderBard */}
      <div
        className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-2 rounded-tr-2xl rounded-br-2xl z-50 transition-all duration-300
       ${showMenu ? 'left-0' : '-left-full'}`}
      >
        {/* Start Buttons with styles */}
        <div className=''>
          <ul className='pl-4'>
            <li>
              <h1 className='text-2xl text-gray-200 uppercase font-bold text-center my-5'>
                Logo
              </h1>
            </li>
            <li className='bg-[#2D2B37] p-4 rounded-tl-xl rounded-bl-xl'>
              <a
                href='#'
                className='bg-[#ec8b76]  flex justify-center py-3 rounded-xl'
              >
                <RiHome2Line className='text-2xl text-white' />
              </a>
            </li>
            <li className='bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a
                href='#'
                className='group-hover:bg-[#ec8b76]  flex justify-center py-3 rounded-xl ease-in duration-150'
              >
                <RiPercentLine className='text-2xl text-[#ec8b76] group-hover:text-white' />
              </a>
            </li>
            <li className='bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a
                href='#'
                className='group-hover:bg-[#ec8b76]  flex justify-center py-3 rounded-xl ease-in duration-150'
              >
                <RiPieChart2Line className='text-2xl text-[#ec8b76] group-hover:text-white' />
              </a>
            </li>
            <li className='bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a
                href='#'
                className='group-hover:bg-[#ec8b76]  flex justify-center py-3 rounded-xl ease-in duration-150'
              >
                <RiMailLine className='text-2xl text-[#ec8b76] group-hover:text-white' />
              </a>
            </li>
            <li className='bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a
                href='#'
                className='group-hover:bg-[#ec8b76]  flex justify-center py-3 rounded-xl ease-in duration-150'
              >
                <RiNotification3Line className='text-2xl text-[#ec8b76] group-hover:text-white' />
              </a>
            </li>
            <li className='bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a
                href='#'
                className='group-hover:bg-[#ec8b76]  flex justify-center py-3 rounded-xl ease-in duration-150'
              >
                <RiSettings4Line className='text-2xl text-[#ec8b76] group-hover:text-white' />
              </a>
            </li>
          </ul>
        </div>
        {/* End buttons with styles */}
        {/* Start btn logout */}
        <div>
          <ul className='pl-4'>
            <li className='bg-[#1F1D2B] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a
                href='#'
                className='group-hover:bg-[#ec8b76]  flex justify-center py-3 rounded-xl ease-in duration-150'
              >
                <RiLogoutBoxRLine className='text-2xl text-[#ec8b76] group-hover:text-white' />
              </a>
            </li>
          </ul>
        </div>
        {/* End btn logout */}
      </div>
      {/* End SliderBard */}
    </>
  );
};

export default Sidebar;
