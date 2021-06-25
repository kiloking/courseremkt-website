import React from 'react'

function Header() {
  return (
    <div className="Header" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg01.png')`}}>
      <div className="titles">
        <img src={process.env.PUBLIC_URL + '/images/header1.png'} alt=""/>
      </div>
      
    </div>
  )
}

export default Header
