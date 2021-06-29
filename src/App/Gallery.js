import React from 'react'

function Gallery() {
  return (
    <div className="gallery">
      <div className="container">
        <div className="title">
          <img src={process.env.PUBLIC_URL + '/images/gallery.png'} alt=""/>
        </div>
        
      </div>

      
    </div>
  )
}

export default Gallery
