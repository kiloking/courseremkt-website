import React from 'react'

function Note() {
  return (
    <div className="note">
      <div className="container">
        <div className="title">
          <img src={process.env.PUBLIC_URL + '/images/note.png'} alt=""/>
        </div>
        <ul className="list">
          <li>本活動優惠期限為 2021/7/1 至 2021/8/5 23:59 止。</li>
          <li>單筆訂單不可同時使用其他折扣碼。</li>
          <li>本活動由夢想動畫舉辦，保留本活動變更、修改、終止之權力，</li>
          <li>若有變更將依夢想動畫 Facebook 粉絲頁公告為準。</li>

        </ul>
        <ul className="socialList">
          <li><a href="https://www.facebook.com/MoonShineAnimation" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/images/fb.png'} alt=""/></a></li>
          <li><a href="https://www.instagram.com/moonshine.tw/" target="_blank" rel="noreferrer"><img src={process.env.PUBLIC_URL + '/images/ig.png'} alt=""/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Note
