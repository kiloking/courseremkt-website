import React from 'react'
import ReactPlayer from 'react-player'
function Gallery() {
  return (
    <div className="gallery">
      <div className="container">
        <div className="title">
          <img src={process.env.PUBLIC_URL + '/images/gallery.png'} alt=""/>
        </div>
        <div className="galleryVideo">
          <div className="gallery-wrapper">
            <ReactPlayer 
              className="gallery-player"
              url='https://vimeo.com/388147374'
              // playing

              controls
              light={process.env.PUBLIC_URL + '/images/videopreview1.jpg'}
              width='100%'
              height='100%'
            />
          </div>
        </div>
        
      </div>

      
    </div>
  )
}

export default Gallery
