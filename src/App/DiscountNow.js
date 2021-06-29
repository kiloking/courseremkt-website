import React from 'react'

function DiscountNow() {
    const courses = [
      {
        id:0 , 
        cover:'01.png',
        title:'夢想動畫｜用 Matte Painting 創造電影奇幻場',
        price:'NT$3600',
        author:'夢想動畫',
        people:'403',
        duration:'9小時9分',
        star:'2',
        link:'https://www.yottau.com.tw/course/intro/930#intro'
      },
      {
        id:1 , 
        cover:'02.png',
        title:'夢想動畫｜AE 合成：18 堂即戰影像料理課',
        price:'NT$2800',
        author:'夢想動畫',
        people:'774',
        duration:'8小時30分',
        star:'11',
        link:'https://www.yottau.com.tw/course/intro/852#intro'
      },
      {
        id:2 , 
        cover:'03.jpg',
        title:'夢想動畫｜用專案學習 Houdini—基礎視覺特效',
        price:'NT$3500',
        author:'夢想動畫',
        people:'464',
        duration:'7小時27分',
        star:'9',
        link:'https://www.yottau.com.tw/course/intro/774#intro'
      },
      {
        id:3 , 
        cover:'04.jpg',
        title:'夢想動畫｜Nuke 特效影像合成—用專案鏡頭帶你入門',
        price:'NT$5000',
        author:'夢想動畫',
        people:'430',
        duration:'22小時33分',
        star:'14',
        link:'https://www.yottau.com.tw/course/intro/717#intro'
      }
    ]
    return (
        <div className="discountNow">
          <div className="container">
          <div className="title">
              <img src={process.env.PUBLIC_URL + '/yotta/title-1.png'} alt=""/>
            </div>
            <div className="cardList">
              {courses.map((d)=>{
                return(
                  <div className="card">
                    <div className="cover">
                      <a href="">
                        <img src={process.env.PUBLIC_URL + '/yotta/'+ d.cover} alt=""/>
                      </a>
                    </div>
                    <div className="content">
                      <a href="/">
                        <div className="title">{d.title}</div>
                        <div className="price">{d.price}</div>
                        <div className="author">{d.author}</div>
                        <div className="detail">
                          <div className="people">
                            <svg class="svg-icon people " viewBox="0 0 24 24.01">
                                <rect class="cls-1" y="0.01" width="24" height="24" opacity="0"></rect>
                                <rect class="cls-1" y="0.01" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M17.51,13.19H15.29a7,7,0,1,0-9.46-2.92,7.08,7.08,0,0,0,2.92,2.92H6.51a4.11,4.11,0,0,0-4.1,4.08V19.5a1.11,1.11,0,0,0,2.21,0V17.27a1.9,1.9,0,0,1,1.9-1.89h11a1.9,1.9,0,0,1,1.9,1.89v4.48H6.82a1.09,1.09,0,0,0-1.11,1.08,1.1,1.1,0,0,0,1,1.11H20.51a1.12,1.12,0,0,0,1.11-1.1h0V17.27A4.11,4.11,0,0,0,17.51,13.19ZM7.21,7A4.8,4.8,0,1,1,12,11.82h0A4.8,4.8,0,0,1,7.21,7Z" transform="translate(0 0.01)"></path>
                                <circle class="cls-2" cx="3.5" cy="22.9" r="1"></circle>
                            </svg>
                            {d.people}人
                          </div>
                          <div className="duratin">
                            <svg class="svg-icon time " viewBox="0 0 24 24">
                                <rect class="cls-1" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M16.18,15.08a1,1,0,0,1-.49-.12l-4.08-2A1.1,1.1,0,0,1,11,12V5.82a1.1,1.1,0,1,1,2.2,0h0v5.44L16.67,13a1.11,1.11,0,0,1,.48,1.48A1.09,1.09,0,0,1,16.18,15.08Z"></path>
                                <path class="cls-2" d="M12,24A12,12,0,0,1,.43,15.16,11.76,11.76,0,0,1,0,12,12,12,0,0,1,2.68,4.44,1,1,0,0,1,4.24,5.7,10,10,0,0,0,2,12a9.83,9.83,0,0,0,.36,2.64A10,10,0,0,0,12,22a9.83,9.83,0,0,0,2.64-.36A10,10,0,0,0,22,12a9.83,9.83,0,0,0-.36-2.64A10,10,0,0,0,12,2a9.74,9.74,0,0,0-1.62.13,1,1,0,0,1-.33-2A11.57,11.57,0,0,1,12,0,12,12,0,0,1,23.57,8.84,11.76,11.76,0,0,1,24,12a12,12,0,0,1-8.84,11.56A11.71,11.71,0,0,1,12,24Z"></path>
                                <circle class="cls-2" cx="6.44" cy="2.5" r="1"></circle>
                            </svg>
                            {d.duration}</div>
                        </div>
                        <div className="star">
                          <div className="star-group">
                            <svg class="svg-icon star-fill" viewBox="0 0 24 24">
                                <rect class="cls-1" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M23.91,9.16A1.84,1.84,0,0,0,22.42,7.9L16.36,7l-2.7-5.48a1.85,1.85,0,0,0-3.32,0L7.64,7,1.58,7.9A1.84,1.84,0,0,0,.09,9.16a1.83,1.83,0,0,0,.47,1.89l4.38,4.27-1,6a1.84,1.84,0,0,0,.73,1.81,1.86,1.86,0,0,0,1.09.35,1.84,1.84,0,0,0,.85-.21L12,20.44l5.42,2.85a1.84,1.84,0,0,0,.85.21,1.86,1.86,0,0,0,1.09-.35,1.84,1.84,0,0,0,.73-1.81l-1-6,4.38-4.27A1.83,1.83,0,0,0,23.91,9.16Z"></path>
                            </svg>
                            <svg class="svg-icon star-fill" viewBox="0 0 24 24">
                                <rect class="cls-1" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M23.91,9.16A1.84,1.84,0,0,0,22.42,7.9L16.36,7l-2.7-5.48a1.85,1.85,0,0,0-3.32,0L7.64,7,1.58,7.9A1.84,1.84,0,0,0,.09,9.16a1.83,1.83,0,0,0,.47,1.89l4.38,4.27-1,6a1.84,1.84,0,0,0,.73,1.81,1.86,1.86,0,0,0,1.09.35,1.84,1.84,0,0,0,.85-.21L12,20.44l5.42,2.85a1.84,1.84,0,0,0,.85.21,1.86,1.86,0,0,0,1.09-.35,1.84,1.84,0,0,0,.73-1.81l-1-6,4.38-4.27A1.83,1.83,0,0,0,23.91,9.16Z"></path>
                            </svg>
                            <svg class="svg-icon star-fill" viewBox="0 0 24 24">
                                <rect class="cls-1" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M23.91,9.16A1.84,1.84,0,0,0,22.42,7.9L16.36,7l-2.7-5.48a1.85,1.85,0,0,0-3.32,0L7.64,7,1.58,7.9A1.84,1.84,0,0,0,.09,9.16a1.83,1.83,0,0,0,.47,1.89l4.38,4.27-1,6a1.84,1.84,0,0,0,.73,1.81,1.86,1.86,0,0,0,1.09.35,1.84,1.84,0,0,0,.85-.21L12,20.44l5.42,2.85a1.84,1.84,0,0,0,.85.21,1.86,1.86,0,0,0,1.09-.35,1.84,1.84,0,0,0,.73-1.81l-1-6,4.38-4.27A1.83,1.83,0,0,0,23.91,9.16Z"></path>
                            </svg>
                            <svg class="svg-icon star-fill" viewBox="0 0 24 24">
                                <rect class="cls-1" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M23.91,9.16A1.84,1.84,0,0,0,22.42,7.9L16.36,7l-2.7-5.48a1.85,1.85,0,0,0-3.32,0L7.64,7,1.58,7.9A1.84,1.84,0,0,0,.09,9.16a1.83,1.83,0,0,0,.47,1.89l4.38,4.27-1,6a1.84,1.84,0,0,0,.73,1.81,1.86,1.86,0,0,0,1.09.35,1.84,1.84,0,0,0,.85-.21L12,20.44l5.42,2.85a1.84,1.84,0,0,0,.85.21,1.86,1.86,0,0,0,1.09-.35,1.84,1.84,0,0,0,.73-1.81l-1-6,4.38-4.27A1.83,1.83,0,0,0,23.91,9.16Z"></path>
                            </svg>
                            <svg class="svg-icon star-fill" viewBox="0 0 24 24">
                                <rect class="cls-1" width="24" height="24" opacity="0"></rect>
                                <path class="cls-2" d="M23.91,9.16A1.84,1.84,0,0,0,22.42,7.9L16.36,7l-2.7-5.48a1.85,1.85,0,0,0-3.32,0L7.64,7,1.58,7.9A1.84,1.84,0,0,0,.09,9.16a1.83,1.83,0,0,0,.47,1.89l4.38,4.27-1,6a1.84,1.84,0,0,0,.73,1.81,1.86,1.86,0,0,0,1.09.35,1.84,1.84,0,0,0,.85-.21L12,20.44l5.42,2.85a1.84,1.84,0,0,0,.85.21,1.86,1.86,0,0,0,1.09-.35,1.84,1.84,0,0,0,.73-1.81l-1-6,4.38-4.27A1.83,1.83,0,0,0,23.91,9.16Z"></path>
                            </svg>
                          </div>
                          ({d.star})
                          
                        </div>
                      </a>
                    </div>
                    <div className="ready">
                      <a href="/">
                        <div className="dot"></div>
                        線上：已開課
                      </a>
                      
                    </div>
                  </div> 
                )
              })}
            </div>
          </div>
            
            
        </div>
    )
}

export default DiscountNow
