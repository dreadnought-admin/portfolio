import React from 'react'
import { useState } from 'react'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import tits from '../src/assets/animetitstest.jpg'
import hentai from "../src/assets/hentai.jpg"
import cropsey from '../src/assets/cropseybgforport.mp4'

const Showcase = () => {
  return (
    <div className="container">
      <Carousel>
          <div>
              <img src={hentai} />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={hentai} />
              <p style={{ color: "white"}} className="legend">Legend 2</p>
          </div>
          <div>
              <img src={hentai} />
              <a href="http://facebook.com"><p className="legend">Legend 3</p></a>
          </div>
      </Carousel>
    </div>
  )
}

export default Showcase
