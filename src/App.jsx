import { Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

library.add(faEnvelope, fab);

import Home from './Home'
import About from './About'
import Nav from './Nav'
import Showcase from './Showcase'
import Contact from './Contact'
import ButtonMailto from './ButtonMailto'
import SocialMediaBar from './SocialMediaBar';

const App = () => {


  return (
    <div>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/showcase" element={<Showcase/>}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/email" element={<ButtonMailto/>}/>
        </Routes>
        
    </div>
  )
}

export default App
