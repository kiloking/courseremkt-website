import React from 'react'

function Course2() {
    return (
      <div className="course course2">
        {/* <div className="bgElement bgElement2">
          <img src={process.env.PUBLIC_URL + '/images/bg_2.png'} alt=""/>
        </div> */}
        <div className="container">
          <div className="doubleContentTitleImg">
            <img src={process.env.PUBLIC_URL + '/images/lesson_title_ho.png'} alt="特效前進" className="title pcShow" />
            <img src={process.env.PUBLIC_URL + '/images/mobilesson_title_ho.png'} alt="特效前進" className="title mobileShow" />
          </div>
          
          <div className="doubleContent">
            <div className="left">
              <div className="albumGif" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/lesson_frame.png'})`}}>
                <img src={process.env.PUBLIC_URL + '/gif/Houdini/01.jpg'} alt=""/>
              </div>
              <div className="albumGif marginTop" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/lesson_frame.png'})`}}>
                <img src={process.env.PUBLIC_URL + '/gif/Houdini/01.gif'} alt=""/>
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
                  <a href='https://www.yottau.com.tw/course/intro/774#intro' target="_blank" rel="noreferrer" name="課程連結-了解Houdini課程" title="課程連結-了解Houdini課程">
                    <img src={process.env.PUBLIC_URL + '/images/lesson_buy.png'} alt=""/>
                  </a>
                </div>
                <div className="goLink article">
                  <a href="https://medium.com/moonshinevfx/%E5%A6%82%E6%9E%9C%E4%BD%A0%E6%83%B3%E6%88%90%E7%82%BA%E7%89%B9%E6%95%88%E5%B8%AB-29b314719c4a?source=---------14-----------------------" target="_blank" rel="noreferrer" name="文章-如果你想成為特效師" title="文章-如果你想成為特效師"> 
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
