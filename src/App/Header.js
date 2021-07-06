import React from 'react'
import ReactPlayer from 'react-player'
function Header() {
  return (
    <div className="Header">
      <div className="player-wrapper pcShow">
        <ReactPlayer 
          className="react-player"
          url='https://www.youtube.com/watch?v=Tc-FRauhCg0'
          playing
          muted
          loop
          width='100%'
          height='100%'
          border='0'
          config={{ playerVars: { showinfo: 0 } }} 
        />
      </div>
      <div 
        className="miboBg mobileShow" 
        style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/banner.png')`}}
      
      >

      </div>
        
      
      <div className="titles">
        <img src={process.env.PUBLIC_URL + '/images/top.png'} alt="" className="pcShow"/>
        <img src={process.env.PUBLIC_URL + '/images/mobiletop.png'} alt="" className="mobileShow"/>

      </div>

      
    </div>
  )
}

export default Header
