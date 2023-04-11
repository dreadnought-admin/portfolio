import React from 'react'
import DotSpacer from './DotSpacer'
import About from './About'
import Contact from './Contact'
import Spacer from './Spacer'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div className="home">
    <div>
      <h1>Hi, <bold>I'm <em>Dom</em></bold> and I make</h1>
        <h2 style={{textDecoration: "line-through", textDecorationColor: "black"}}>react && typescript apps</h2>
        <h2 style={{textDecoration: "line-through", textDecorationColor: "black"}}>efficient && effective solutions</h2>
        <h2 style={{textDecoration: "line-through", textDecorationColor: "black"}}>curated user experiences</h2>
        <h2>cool shit.</h2>
      </div>
      <div>
        <DotSpacer/>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Spacer />
      </div>
      <div>
        <Carousel />
      </div>
      <br/>
      <div>
        <Spacer />
      </div>
      <div>
        <Spacer />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default Home
