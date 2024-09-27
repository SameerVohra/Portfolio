import Explore from './Explore';
import NavBar from './NavBar';
import SideBar from './SideBar';
import TopBar from './TopBar';
import { Outlet } from 'react-router';

function MainPage() {
  return (
    <div className="overflow-y-hidden min-h-screen m-0">
      <TopBar />
      <div className='flex flex-row w-full'>
        <SideBar />
        <Explore />
        <div className='border-white border-2 w-full flex flex-col'>
          <NavBar />
          <span className='border border-white'></span>
          <div className='min-h-screen'> 
            <Outlet /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
