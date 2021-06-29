import './App.scss';

import Header from './Header'
import About from './About'
import Course1 from './Course1'
import Course2 from './Course2'
import Course3 from './Course3'
import Course4 from './Course4'
import DiscountNow from './DiscountNow'
import Gallery from './Gallery'
import Note from './Note'


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Course1/>
      <Course2/>
      <Course3/>
      <Course4/>
      <DiscountNow/>
      <Gallery/>
      <Note/>
    
    </div>
  );
}

export default App;
