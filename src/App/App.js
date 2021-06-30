import './App.scss';
import './mobileApp.scss';

import Header from './Header'
import About from './About'
import Course1 from './Course1'
import Course2 from './Course2'
import Course3 from './Course3'
import Course4 from './Course4'
import DiscountNow from './DiscountNow'
import Gallery from './Gallery'
import Note from './Note'
import { ParallaxProvider , Parallax } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mobiDesc mobileShow">
        <img src={process.env.PUBLIC_URL + '/images/mobiletop2.png'} alt="" className="mobileShow"/>
      </div>
      <About/>
      <ParallaxProvider>
      <div className="para">
        <Parallax y={[50, -50]} className='bgElement bgElement1' >
          <img src={process.env.PUBLIC_URL + '/images/bg_1.png'} alt=""/>
        </Parallax>
        <Parallax y={[50, -50]} className='bgElement bgElement2' >
          <img src={process.env.PUBLIC_URL + '/images/bg_2.png'} alt=""/>
        </Parallax>
        <Parallax y={[50, -50]} className='bgElement bgElement3' >
          <img src={process.env.PUBLIC_URL + '/images/bg_3.png'} alt=""/>
        </Parallax>
        <Parallax y={[-50, 50]} className='bgElement bgElement4' >
          <img src={process.env.PUBLIC_URL + '/images/bg_4.png'} alt=""/>
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow4' >
          <img src={process.env.PUBLIC_URL + '/images/arrow_4.png'} alt="" />
        </Parallax>
        <Parallax y={[-100, 100]} className='arrow arrow4-2' >
          <img src={process.env.PUBLIC_URL + '/images/arrow_4.png'} alt="" />
        </Parallax>
        <Parallax y={[200, -200]} className='arrow arrow4-3' >
          <img src={process.env.PUBLIC_URL + '/images/arrow_4.png'} alt="" />
        </Parallax>
        <Parallax y={[-100, 100]} className='arrow arrow2'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[-100, 100]} className='arrow arrow2-2'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow2-3'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow2-4'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow2-5'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow2-6'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow2-7'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[-100, 100]} className='arrow arrow2-8'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[100, -100]} className='arrow arrow2-9'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[-100, 100]} className='arrow arrow2-10'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_2.png'} alt="" />
        </Parallax>
        <Parallax y={[-200, 200]} className='arrow arrow6'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_6.png'} alt="" />
        </Parallax>
        <Parallax y={[200, -200]} className='arrow arrow6-2'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_6.png'} alt="" />
        </Parallax>
        <Parallax y={[200, -200]} className='arrow arrow6-3'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_6.png'} alt="" />
        </Parallax>
        <Parallax y={[-200, 200]} className='arrow arrow3'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_3.png'} alt="" />
        </Parallax>
        <Parallax y={[200, -200]} className='arrow arrow3-2'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_3.png'} alt="" />
        </Parallax>
        <Parallax y={[-200, 200]} className='arrow arrow3-3'  >
        <img src={process.env.PUBLIC_URL + '/images/arrow_3.png'} alt="" />
        </Parallax>
        <Parallax y={[200, -200]} className='arrow arrow5' >
        <img src={process.env.PUBLIC_URL + '/images/arrow_5.png'} alt="" />
        </Parallax>
        <Parallax y={[200, -200]} className='arrow arrow5-2' >
        <img src={process.env.PUBLIC_URL + '/images/arrow_5.png'} alt="" />
        </Parallax>
        <Parallax y={[-200, 200]} className='arrow arrow5-3' >
        <img src={process.env.PUBLIC_URL + '/images/arrow_5.png'} alt="" />
        </Parallax>
        <Course1/>
        <Course2/>
        <Course3/>
        <Course4/>
      </div>
      </ParallaxProvider>
      
      <DiscountNow/>
      <Gallery/>
      <Note/>
    
    </div>
  );
}

export default App;
