import React from 'react'
import spade from '../src/assets/spade.png'

const Showcase = () => {
  return (
  <div className="showcase-container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>Cropsey</h1>
        <p>React + Rails + CSS</p>
        <p>a simple responsive site for the NY-based hardcore band "Cropsey"</p>
        <a target="_blank" href="https://github.com/dreadnought-admin/authenticated-cropsey"><p>GitHub</p></a>
        <a target="_blank" href="https://www.youtube.com/watch?v=aJDsA8nlWvY"><p>Demo</p></a>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>Four Corners</h1>
        <p>React Native</p>
        <p>a client-side travel app that integrates the TripAdvisor && Google Maps APIs</p>
        <a target="_blank" href="https://github.com/dreadnought-admin/four-corners"><p>GitHub</p></a>
        <a target="_blank" href="#"><p>Demo</p></a>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>The Black Market</h1>
        <p>React + TS + Rails + MUI</p>
        <p>an e-commerce site for the sale of vintage gothic records</p>
        <a target="_blank" href="https://github.com/dreadnought-admin/the-black-market-redux"><p>GitHub</p></a>
        <a target="_blank" href="#"><p>Demo</p></a>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>This Portfolio</h1>
        <p>React + CSS</p>
        <p>since react doesn't want you to see the html in the console</p>
        <a target="_blank" href="https://github.com/dreadnought-admin/portfolio/"><p>GitHub</p></a>
      </div>
    </div>
  </div>
  
  </div>
  )
}

export default Showcase
