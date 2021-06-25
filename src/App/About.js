import React from 'react'

function About() {
    return (
        <div className="About" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg02.png')`}}>
            <div className="content">
                <div className="up">
                    up
                </div>
                <div className="down">
                    down
                </div>
            </div>
        </div>
    )
}

export default About
