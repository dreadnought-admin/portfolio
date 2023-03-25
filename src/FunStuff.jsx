import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { InstagramEmbed } from 'react-social-media-embed'


const FunStuff = () => {
  return (
    <div>
      <div>
        <h1>3 things i'm finding whimsical this week (periodically updates!)</h1>
      </div>
      <div>
      <h2>No.1:</h2>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <iframe
        width={328}
        height={""}
        src={`https://www.youtube.com/embed/JnXFIismm6U`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      </div>
      <p style={{ display: 'flex', justifyContent: 'center' }}>This song from the German goth-rock band <em>Wisborg</em></p>
      </div>
      <br/>
      <hr></hr>

      <div>
        <h2>No.2:</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/p/CpFmQeYIQ8l/" width={328} />
        </div>
        <p style={{ display: 'flex', justifyContent: 'center' }}>This panel from <em>Vagabond</em> I saw on Instagram</p>
      </div>
      <hr></hr>

      <div>
        <h2>No.3:</h2>
          <Link style={{textDecoration:"none"}} to="https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o">
            Not <em>as</em> whimsical as most other things, but it's worth meditating on the knowledge that create-react-app has finally died. 
            RIP and thank you for your service.
          </Link>
      </div>
    </div>
  )
}

export default FunStuff
