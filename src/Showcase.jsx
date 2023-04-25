import React from 'react'



const Showcase = () => {
  return (
  <div className="showcase-container">
  <ul>
      <div className="showcase-text">
      <a target="_blank" className="header-link" href="https://cropsey.netlify.app/"><h1>Cropsey</h1></a>
        <section>
          <p>React + Rails + CSS</p>
          <p>a simple responsive site for the NY-based hardcore band "Cropsey". features an admin panel + full CRUD</p>
          <p>currently: in production</p>
        </section>
        <div className="button-74-container">
        <a target="blank" href="https://github.com/dreadnought-admin/authenticated-cropsey"><button className="button-74 confirm_selection">GitHub</button></a>
        <a target="blank" href="https://www.youtube.com/watch?v=12j5Rk3s9MI"><button className="button-74 confirm_selection">Inspiration</button></a>
      </div>
      </div>

      <div className="showcase-text">
        <a target="_blank" className="header-link" href="https://youtu.be/Yv0v8qXB6kA"><h1>Four Corners</h1></a>
        <section>
          <p>React Native</p>
          <p>a client-side travel app that integrates the RESTful Countries API</p>
          <p>currently: in continued development</p>
        </section>
        <div className="button-74-container">
        <a target="_blank" href="https://github.com/dreadnought-admin/four-corners"><button className="button-74 confirm_selection">GitHub</button></a>
        <a target="_blank" href="https://www.youtube.com/watch?v=SVjOB3ZN1Ek"><button className="button-74 confirm_selection">Inspiration</button></a>
      </div>
      </div>
    
      <div className="showcase-text">
      <a target="_blank" className="header-link" href="#"><h1>The Black Market</h1></a>
        <em><h2>currently under reconstruction. check out the github for updates!</h2></em>
        <section>
          <p>React + TS + Rails + MUI</p>
          <p>an e-commerce site for the sale of vintage gothic records</p>
        </section>
        <div className="button-74-container">
        <a target="_blank" href="https://github.com/dreadnought-admin/the-black-market-redux"><button className="button-74 confirm_selection">GitHub</button></a>
        <a target="_blank" href="https://www.youtube.com/watch?v=IuezNswtRfo"><button className="button-74 confirm_selection">Inspiration</button></a>
      </div>
      </div>

      <div className="showcase-text">
        <a target="_blank" className="header-link" href="#"><h1>This Website</h1></a>
        <section>
          <p>React + CSS</p>
          <p>a single-page react native portfolio. extremely original.</p>
          <p>here's the github so that you can see the html:</p>
        </section>
        <div className="button-74-container">
        <a target="_blank" href="https://github.com/dreadnought-admin/portfolio"><button className="button-74 confirm_selection">GitHub</button></a>      </div>
      </div>

    </ul>
    </div>
  )
}

export default Showcase
