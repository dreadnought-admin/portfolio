import React from 'react'
import { CCarousel } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import cropsey from '../src/assets/logo.jpg'
import fourcorners from '../src/assets/fourcorners.png'



import hentai from "../src/assets/hentai.jpg"

const Carousel = () => {
  return (
    <div>
        <CCarousel controls indicators>
            <CCarouselItem>
                <CImage style={{maxHeight: "350px"}} className="d-block w-100" src={cropsey} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block">
                <a style={{textDecoration: "none", color: "pink", textShadow: "1px 1px black"}} target="_blank" href="http://facebook.com"><h5>Cropsey</h5></a>
                <p>A full-stack application for the NY-based hardcore band known as "Cropsey". <strong>React + Rails</strong> built on <strong>Vite</strong></p>
                <p><a target="_blank" href="https://www.youtube.com/watch?v=aJDsA8nlWvY">Demo</a> | <a target="_blank" href="https://github.com/dreadnought-admin/authenticated-cropsey">GitHub</a></p>
                </CCarouselCaption>
            </CCarouselItem>

            <CCarouselItem>
                <CImage style={{maxHeight: "350px"}} className="d-block w-100" src={fourcorners} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block">
                <h5>Four Corners</h5>
                <p>A client-side travel app paired with TripAdvisor's API. <strong>React Native</strong> built on <strong>React Native CLI</strong></p>
                <p><a target="_blank" href="#">Demo</a> | <a target="_blank" href="https://github.com/dreadnought-admin/four-corners">GitHub</a></p>
                </CCarouselCaption>
            </CCarouselItem>

            <CCarouselItem>
                <CImage style={{maxHeight: "350px"}} className="d-block w-100" src={hentai} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block">
                <h5>The Black Market</h5>
                <p>A client-side travel app paired with TripAdvisor's API. <strong>React Native</strong> built on <strong>React Native CLI</strong></p>
                <p><a target="_blank" href="#">Demo</a> | <a target="_blank" href="https://github.com/dreadnought-admin/four-corners">GitHub</a></p>
                </CCarouselCaption>
            </CCarouselItem>

        </CCarousel>
    </div>
  )
}

export default Carousel