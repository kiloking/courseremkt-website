import React from 'react'

function About() {
  return (
    <div className="About" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg02.png')`}}>
      <div className="content">
        <div className="up">
          <div className="left">
            <img src={process.env.PUBLIC_URL + '/images/about_t1-2.png'} alt="" className="iconArrow"/>
            
            <img src={process.env.PUBLIC_URL + '/images/about_a1.png'} alt=""/>
          </div>
          <div className="right">
            <img src={process.env.PUBLIC_URL + '/images/about_t1.png'} alt=""/>
            <div className="desc">
            台灣的大型動畫特效公司，擅長電影、廣告、影集等影像製作。著名專案像是五月天的電影《人生無限公司》、星宇航空影片《星探者》等，都是夢想的作品。
            </div>
          </div>
        </div>
        <div className="down">
          <div className="left">
          <img src={process.env.PUBLIC_URL + '/images/about_t2.png'} alt="" className="titleImg2"/>
          <div className="desc">
          由業界工作者開設，教授真正每天使用的軟體知識，並用實際專案一步步操作示範。超高實用性的課程內容和教材，有助於你更快上手專案、踏進產業。
            
          </div>
          </div>
          <div className="right">
            <img src={process.env.PUBLIC_URL + '/images/about_b1.png'} alt=""/>
            <img src={process.env.PUBLIC_URL + '/images/about_t2-2.png'} alt="" className="iconArrow"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
