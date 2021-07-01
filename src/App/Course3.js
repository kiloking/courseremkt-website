import React from 'react'

function Course3() {
  return (
    <div className="course course3">
      {/* <div className="bgElement bgElement3">
        <img src={process.env.PUBLIC_URL + '/images/bg_3.png'} alt=""/>
      </div> */}
      <div className="container">
        <div className="doubleContentTitleImg">
          <img src={process.env.PUBLIC_URL + '/images/lesson_title_nu.png'} alt="Nuke 合成前進" className="title pcShow" />
          <img src={process.env.PUBLIC_URL + '/images/mobilesson_title_nu.png'} alt="Nuke 合成前進" className="title mobileShow" />
        </div>
        
        <div className="doubleContent">
          <div className="left">
            <div className="albumGif" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/lesson_frame.png'})`}}>
              <img src={process.env.PUBLIC_URL + '/gif/nuke/01.jpg'} alt=""/>
            </div>
            <div className="albumGif marginTop" style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/lesson_frame.png'})`}}>
              <img src={process.env.PUBLIC_URL + '/gif/nuke/01.gif'} alt=""/>
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
                這堂 Nuke 入門課程，會從基本介面跟觀念講起。零基礎、也歡迎學習。
              </div>
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">有 2D 或 3D 背景，想踏進後製的你_</div>
              </div>
              <div className="desc">
                有 2D 或 3D 相關背景，對影像後製與合成有興趣，你會需要這堂課幫助你了解節點式與圖層式的不同。
              </div>
              <div className="title">
                <div className="icon">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_v.png'} alt=""/>
                </div>
                <div className="text">從事影像後期，想學習 Nuke 的你_</div>
              </div>
              <div className="desc">
                如果你本來是 AE 或其他合成軟體的使用者，想增加工作技能，那麼這堂課可以讓你快速上手。
              </div>
              <div className="goLink buy">
                <a href='https://www.yottau.com.tw/course/intro/717#intro' target="_blank" rel="noreferrer" name="課程連結-了解Nuke課程" title="課程連結-了解Nuke課程">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_buy.png'} alt=""/>
                </a>
              </div>
              <div className="goLink article">
                <a href="http://bit.ly/2zNKQGR"  target="_blank" rel="noreferrer" name="文章-為什麼好萊塢電影都用 Nuke 合成？以及合成軟體的差異" title="文章-為什麼好萊塢電影都用 Nuke 合成？以及合成軟體的差異">
                  <img src={process.env.PUBLIC_URL + '/images/lesson_more_nu.png'} alt=""/>
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

export default Course3
