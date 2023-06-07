import { useEffect } from 'react'



const Showcase = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
  <div className="showcase-container">
  <ul>
      <div className="showcase-text">
      <a className="header-link" href="https://cropsey.netlify.app/"><h1>Cropsey</h1></a>
        <section>
          <p>React + Rails + CSS</p>
          <p>a simple responsive site for the NY-based hardcore band "Cropsey"</p>
        </section>
        <div className="button-74-container">
        <a href="https://github.com/dreadnought-admin/authenticated-cropsey"><button className="button-74 confirm_selection">GitHub</button></a>
        {/* <a href="https://www.youtube.com/watch?v=12j5Rk3s9MI"><button className="button-74 confirm_selection">Inspiration</button></a> */}
      </div>
      </div>

      <div className="showcase-text">
        <a className="header-link" href="https://aldgatechipshop.netlify.app/"><h1>Aldgate Chip Shop</h1></a>
        <section>
          <p>React + GetForm.io + CSS</p>
          <p>a strictly client-side app for the Aldgate Chip Shop out of Adelaide, South Australia</p>
        </section>
        <div className="button-74-container">
        <a href="https://github.com/dreadnought-admin/aldgate-chip-shop"><button className="button-74 confirm_selection">GitHub</button></a>
      </div>
      </div>

      <div className="showcase-text">
        <a className="header-link" href="https://youtu.be/tTQwuNJuqkE"><h1>The Black Vinyl Market</h1></a>
        <section>
          <p>C# + .NET6 + Blazor</p>
          <p>an ongoing Blazor e-commerce project</p>
          <p>currently working on: <strong>user authentication && cart functionality</strong></p>
        </section>
        <div className="button-74-container">
        <a href="https://github.com/dreadnought-admin/BlazorEcommerce"><button className="button-74 confirm_selection">GitHub</button></a>
        <a href="https://youtu.be/tTQwuNJuqkE"><button className="button-74 confirm_selection">Video Demo</button></a>
      </div>
      </div>

      <div className="showcase-text">
        <a className="header-link" href="https://youtu.be/Yv0v8qXB6kA"><h1>Four Corners</h1></a>
        <section>
          <p>React Native</p>
          <p>a client-side travel app that integrates the RESTful Countries API</p>
        </section>
        <div className="button-74-container">
        <a href="https://github.com/dreadnought-admin/four-corners"><button className="button-74 confirm_selection">GitHub</button></a>
        {/* <a href="https://www.youtube.com/watch?v=SVjOB3ZN1Ek"><button className="button-74 confirm_selection">Inspiration</button></a> */}
      </div>
      </div>
    
      {/* <div className="showcase-text">
      <a className="header-link" href="https://github.com/dreadnought-admin/the-black-market-redux"><h1>The Black Market</h1></a>
        <em><h2>currently under reconstruction</h2></em>
        <section>
          <p>React + TS + Rails + MUI</p>
          <p>an e-commerce site for the sale of vintage gothic records</p>
        </section>
        <div className="button-74-container">
        <a href="https://github.com/dreadnought-admin/the-black-market-redux"><button className="button-74 confirm_selection">GitHub</button></a>
        <a href="https://www.youtube.com/watch?v=IuezNswtRfo"><button className="button-74 confirm_selection">Inspiration</button></a>
      </div>
      </div> */}

      <div className="showcase-text">
        <a className="header-link"><h1>This Website</h1></a>
        <section>
          <p>React + CSS</p>
          <p>a single-page react native portfolio. extremely original.</p>
          <p>here's the github so that you can see the html:</p>
        </section>
        <div className="button-74-container">
        <a href="https://github.com/dreadnought-admin/portfolio"><button className="button-74 confirm_selection">GitHub</button></a>      </div>
      </div>
    </ul>
    </div>
  )
}

export default Showcase