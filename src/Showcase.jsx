import React from 'react'
import { useState } from 'react'

const Showcase = () => {
  return (
    <div className="showcase">
      <h1>current projects</h1>
      <h4><em>note: unless otherwise stated, all projects contained here are still in production</em></h4>
      <div>
        <h2>the underworld</h2>
          <a href="https://github.com/dreadnought-admin/underworld"><img className="showcase-img" src="images/200w.gif"/></a>
          <p><strong>React + Flask</strong></p>
          <p>built on vite and supported by firebase. <em>the underworld</em> is a desktop app meant to 
        connect users with an interest in video games to one another via the app's IM system and discourse forums</p>
        <a href="#"><button>GitHub</button></a> <a href="#"><button>Demo</button></a>
      </div>

      <br/>

      <div>
        <h2>nakmuay forum</h2>
          <a href="https://github.com/dreadnought-admin/nakmuay-forum-v1"><img className="showcase-img" src="/images/sagat-ttigergenocide.gif"/></a>
          <p><strong>React + Rails</strong></p>
          <p>built on vite. <em>nakmay forum</em> is a desktop forum app for 'nakmays', what traditional
        muay thai students are often called in Thailand, the mecca of the sport</p>
         <a href="#"><button>GitHub</button></a> <a href="#"><button>Demo</button></a>
      </div>

      <br/>

      <div>
        <h2>the blackguard</h2>
          <a href="https://github.com/dreadnought-admin/the-blackguard"><img className="showcase-img"  src="/images/output-onlinegiftools.gif"/></a>
          <p><strong>React + Rails</strong></p>
          <p>built on vite. <em>the blackguard</em> is a desktop app produced to showcase the 
        online guild known as <bold>The Blackguard</bold></p>
        <a href="#"><button>GitHub</button></a> <a href="#"><button>Demo</button></a>
      </div>

      <br/>

      <div>
        <h2>the black market</h2>
          <a href="#"><img className="showcase-img" src="#"/></a>
          <p><strong>React + Rails</strong></p>
          <p><em>currently being refactored to TS</em></p>
          <p>built on create-react-app. <em>the black market</em> is a full-stack desktop e-commerce site with a focus on goth && alternative records.</p>
          <a href="#"><button>GitHub</button></a> <a href="#"><button>Demo</button></a>
      </div>

      <br/>
    </div>
  )
}

export default Showcase
