import React from 'react'

function Course4() {
  return (
    <div className="course course4">
      <div className="bgElement bgElement4">
        <img src={process.env.PUBLIC_URL + '/images/bg_4.png'} alt=""/>
      </div>
      <div className="container">
        <div className="doubleContentTitleImg">
          <img src={process.env.PUBLIC_URL + '/images/lesson_title_mp.png'} alt="繪景前進" className="title" />
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
                <div className="text">喜歡寫實風格的插畫家_</div>
              </div>
              <div className="desc">
                提升構圖技巧及熟悉風格轉換關鍵，能獨立完成場景作品。
              </div>
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">想精進美術力的設計師_</div>
              </div>
              <div className="desc">
                了解空間透視觀念，結合影像合成，進階嘗試動態運鏡技術。
              </div>
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">想進入動畫或電影公司的繪景師_</div>
              </div>
              <div className="desc">
                用專案帶你熟悉業界的繪景工作流程，順利與影像產業接軌。
              </div>
              <div className="goLink buy">
                <a href='http://google.com' target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_buy.png'} alt=""/>
                </a>
              </div>
              <div className="goLink article">
                <a href="/">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_more_mp.png'} alt=""/>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        {/* <div className="lessonLine">
          <img src={process.env.PUBLIC_URL + '/images/lesson_line.png'} alt=""/>
        </div> */}
      </div>
        
    </div>
  )
}

export default Course4
