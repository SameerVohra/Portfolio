import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center p-6 md:p-11'>
        <h1 className='text-white text-4xl sm:text-5xl md:text-7xl font-bold font-mono'>
          Sameer Vohra
        </h1>
        <div className='mt-4'>
          <h2 className='text-gray-300 text-2xl sm:text-3xl md:text-5xl font-mono'>
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
        <div className='text-white flex flex-col sm:flex-row gap-4 mt-6'>
          <button
            className='p-3 bg-gray-500 rounded-md font-bold font-sans w-full sm:w-auto text-sm sm:text-base'
            onClick={() => navigate('/projects')}
          >
            VIEW WORK
          </button>
          <button
            className='border-white border p-3 rounded-md w-full sm:w-auto text-sm sm:text-base'
            onClick={() => navigate('/connect')}
          >
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
