import React from 'react'

function Course2() {
    return (
      <div className="course course2">
        <div className="bgElement bgElement2">
          <img src={process.env.PUBLIC_URL + '/images/bg_2.png'} alt=""/>
        </div>
        <div className="container">
          <div className="doubleContentTitleImg">
            <img src={process.env.PUBLIC_URL + '/images/lesson_title_ho.png'} alt="特效前進" className="title" />
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
                  <div className="text">完全零基礎的你_</div>
                </div>
                <div className="desc">
                  這是一堂 Houdini 入門課程，會從基本介面跟觀念講起。零基礎也能學。
                </div>
                <div className="title">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                  </div>
                  <div className="text">有 2D 或 3D 背景，想進入後期產業的你_</div>
                </div>
                <div className="desc">
                  如果你有 2D 或 3D 相關背景，學習基礎更扎實。
                </div>
                <div className="title">
                  <div className="icon">
                    <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                  </div>
                  <div className="text">本來使用其他外掛做特效的你_</div>
                </div>
                <div className="desc">
                  若你本來使用它軟體做特效，改用 Houdini 的自由度絕對超越想像。
                </div>
                <div className="goLink buy">
                  <a href='http://google.com' target="_blank" rel="noreferrer">
                    <img src={process.env.PUBLIC_URL + '/images/lesson_buy.png'} alt=""/>
                  </a>
                </div>
                <div className="goLink article">
                  <a href="/">
                    <img src={process.env.PUBLIC_URL + '/images/lesson_more_ho.png'} alt=""/>
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

export default Course2
