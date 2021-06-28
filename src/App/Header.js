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
          loop
          width='100%'
          height='100%'
        
        />
      </div>
        
      
      <div className="titles">
        <img src={process.env.PUBLIC_URL + '/images/header1.png'} alt=""/>
      </div>
      
    </div>
  )
}

export default Header
