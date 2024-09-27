import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-start p-11'>
        <h1 className='text-white text-7xl font-bold font-mono'>
          Sameer Vohra
        </h1>
        <div className='mt-4'> {/* This div will ensure it is on a new line */}
          <h2 className='text-gray-300 text-5xl font-mono'>
            <Typewriter
              words={['Full Stack Developer']}
              loop={1} 
              cursor
              cursorStyle='_'
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
        <div className='text-white flex flex-row gap-4 mt-4'>
          <button className='p-3 bg-gray-500 rounded-md font-bold font-sans' onClick={()=>navigate("/projects")}>VIEW WORK</button>
          <button className='border-white border p-3 rounded-md' onClick={()=>navigate("/connect")}>CONTACT</button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
