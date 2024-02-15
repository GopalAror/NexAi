import './App.css';
import MyNav from './components/MyNav';
import Header from './components/Header';
import Home from './components/Home';
import Feature from './components/Feature';
import BlockChain from './components/BlockChain';
import MySliders from './components/MySliders';
import AI from './components/AI';
import Joinus from './components/Joinus';
import Token from './components/Token';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import BackToTop from './components/BackToTop';

function App() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 4000);

  }, [])

  return (
    <div>
      {loading ? (<div><Loader /></div>) : (<div className="bg-[#040404]">
        <div className='md:px-[30px] md:py-[10px] relative overflow-x-clip'>
          <div className='bg-[url(./assets/images/bg-hero.webp)] w-full bg-full max-md:bg-cover bg-no-repeat min-h-screen bg-center flex flex-col'>
            <MyNav />
            <Header />
          </div>
          <div className='bg-overlay z-0 left-0 absolute bottom-[-4%] w-full min-h-[106px] rotate-180'></div>
        </div>
        <Home />
        <Feature />
        <BlockChain />
        <MySliders />
        <AI />
        <Token />
        <Joinus />
        <Footer />
        <BackToTop />
      </div>)}
    </div>
  );
}

export default App;
