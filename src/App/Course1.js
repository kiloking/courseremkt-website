import React from 'react'

function Course1() {
  return (
    <div className="course course1">
      <div className="bgElement bgElement1">
        <img src={process.env.PUBLIC_URL + '/images/bg_1.png'} alt=""/>
      </div>
      <div className="container">
        <div className="doubleContentTitleImg">
          <img src={process.env.PUBLIC_URL + '/images/lesson_title_ae.png'} alt="AE合成" className="title" />
        </div>
        
        <div className="doubleContent">
          <div className="left">
            <div className="albumGif" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/lesson_frame.png'})`}}>
              <img src={process.env.PUBLIC_URL + '/gif/AE/01.gif'} alt=""/>
            </div>
            <div className="albumGif marginTop" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/lesson_frame.png'})`}}>
              <img src={process.env.PUBLIC_URL + '/gif/AE/01.gif'} alt=""/>
            </div>
          </div>
          <div className="right">
            <div className="rTitle">
              <img src={process.env.PUBLIC_URL + '/images/lesson_01.png'} alt=""/>
            </div>
            <div className="rSpec">
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">職業合成師_</div>
              </div>
              <div className="desc">
                即將畢業或已工作一段時間，未來想進入後期公司做影像合成的專職工作者
              </div>
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">影視工作者_  </div>
              </div>
              <div className="desc">
                想延伸自身實務能力、提升團隊協作能力的影像導演、分鏡師、剪輯師、動畫師
              </div>
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">想增加影像技能的設計人_</div>
              </div>
              <div className="desc">
                即將畢業身為美感獨到的設計人，想學習合成技術，為技能加值，往影視、動畫產業邁進即將畢業
              </div>
              <div className="goLink buy">
                <a href='http://google.com' target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_buy.png'} alt=""/>
                </a>
              </div>
              <div className="goLink article">
                <a href="/">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_more_ae.png'} alt=""/>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div className="lessonLine">
          <img src={process.env.PUBLIC_URL + '/images/lesson_line.png'} alt=""/>
        </div>
      </div>
        
    </div>
  )
}

export default Course1
