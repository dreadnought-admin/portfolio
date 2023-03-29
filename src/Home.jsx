import React from 'react'
import Showcase from './Showcase'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="home">
      <h1>Hi, <bold>I'm <em>Dom</em></bold> and I make</h1>
        <h2 style={{textDecoration: "line-through", textDecorationColor: "black"}}>react && typescript apps</h2>
        <h2 style={{textDecoration: "line-through", textDecorationColor: "black"}}>efficient && effective solutions</h2>
        <h2 style={{textDecoration: "line-through", textDecorationColor: "black"}}>curated user experiences</h2>
        <h2>cool shit.</h2>

    </div>
  )
}

export default Home
