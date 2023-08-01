import './App.css';
import Navbar from './components/Navbar';
import footer from './components/assets/footer.png';
import bg from './components/assets/bg.png';
import cube from './components/assets/cube.png';
import mobile from './components/assets/mobile.png';
import pillar from './components/assets/pillar.png';
import stairs from './components/assets/stairs.png';
import sidestairs from './components/assets/sidestairs.png';

function App() {
  return (
    <div className='App p-4 m-auto w-[100vw]'>
      <img src={bg} alt="background" className='fixed top-0' />
      <Navbar />
      <div className="relative h-[100vh] md:h-[78vh]">
        <div className='flex justify-center items-center text-white font-[900]'>
          <span className='absolute top-44 md:top-16 text-[8rem] md:text-[11.5rem]'>CASH</span>
          <img className='absolute pl-5 w-[15rem] md:w-[22rem] top-52 md:top-20' src={mobile} alt="mobile" />
          <span className='absolute top-72 md:top-52 text-[8rem] md:text-[11.5rem]'>APP</span>
        </div>
        <img className='absolute left-5 md:left-40 top-3 w-20' src={cube} alt="cube" />
        <img className='absolute -bottom-12 w-64 right-5 md:right-64' src={pillar} alt="pillar" />
        <img className='absolute w-40 right-5 md:right-60' src={stairs} alt="stairs" />
        <img className='absolute bottom-3 left-5 md:left-40 w-40' src={sidestairs} alt="sidestairs" />
      </div>
      <div className='fixed bottom-4'>
        <img className='w-[90%] z-50 m-auto' src={footer} alt="footer" />
      </div>
    </div>
  );
}

export default App;
