import React from 'react'
import ReactPlayer from 'react-player'
function Header() {
  return (
    <div className="Header">
      <div className="player-wrapper">
        <ReactPlayer 
          className="react-player"
          url={process.env.PUBLIC_URL + '/images/keyvisual_video.mp4'}
          playing
          muted
          loop
          width='100%'
          height='100%'
          border='0'
        />
      </div>
        
      
      <div className="titles">
        <img src={process.env.PUBLIC_URL + '/images/top.png'} alt="" className="pcShow"/>
        <img src={process.env.PUBLIC_URL + '/images/mobiletop.png'} alt="" className="mobileShow"/>

      </div>

      
    </div>
  )
}

export default Header
