import React from 'react'

function Course1() {
  return (
    <div className="course course1">
      <div className="container">
        <img src={process.env.PUBLIC_URL + '/images/course01.png'} alt="AE合成" className="title" />
        <div className="doubleContent">
          <div className="left">
            <div className="img">1</div>
            <div className="img">2</div>
          </div>
          <div className="right">
            <div className="rTitle">
              這堂課適合
              <div className="icon">]</div>
            </div>
            <div className="rSpec">
              <div className="title">
                <div className="icon">v</div>
                <div className="text">即將畢業</div>
              </div>
              <div className="desc">
                即將畢業即將畢業
              </div>
              <div className="title">
                <div className="icon">v</div>
                <div className="text">即將畢業</div>
              </div>
              <div className="desc">
                即將畢業即將畢業
              </div>
              <div className="title">
                <div className="icon">v</div>
                <div className="text">即將畢業</div>
              </div>
              <div className="desc">
                即將畢業即將畢業
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Course1
