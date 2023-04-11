import React from 'react'
import { useState } from 'react'
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
        <p>A simple responsive site for the NY-based hardcore band "Cropsey"</p>
        <a target="_blank" href="http://facebook.com"><p>GitHub</p></a>
        <a target="_blank" href="http://twitter.com"><p>Demo</p></a>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>Cropsey</h1>
        <p>React + Rails + CSS</p>
        <p>A simple responsive site for the NY-based hardcore band "Cropsey"</p>
        <a target="_blank" href="http://facebook.com"><p>GitHub</p></a>
        <a target="_blank" href="http://twitter.com"><p>Demo</p></a>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>Cropsey</h1>
        <p>React + Rails + CSS</p>
        <p>A simple responsive site for the NY-based hardcore band "Cropsey"</p>
        <a target="_blank" href="http://facebook.com"><p>GitHub</p></a>
        <a target="_blank" href="http://twitter.com"><p>Demo</p></a>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
       <img src={spade} style={{height: "300px", width: "250px"}}></img>
      </div>
      <div class="flip-card-back">
        <h1>Cropsey</h1>
        <p>React + Rails + CSS</p>
        <p>A simple responsive site for the NY-based hardcore band "Cropsey"</p>
        <a target="_blank" href="http://facebook.com"><p>GitHub</p></a>
        <a target="_blank" href="http://twitter.com"><p>Demo</p></a>
      </div>
    </div>
  </div>
  
  </div>
  )
}

export default Showcase
