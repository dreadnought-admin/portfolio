import React from 'react';
import resume from '../src/assets/Dom_Alexander_Resume_.pdf';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
     <article>
        <p>I'm a full-stack developer who has a penchant for React, TS, and ternary operators.</p>
        
        <p>In February 2023 I graduated from Flatiron School's full-stack software engineering program—but I certainly haven't stopped there.
          Through their cirriculum I discovered my affinity for programming and we've been hated friends and dear enemies ever since.
        </p>
        <p className="list-label">Technical Skills:</p>
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>React</li>
          <li>React Native</li>
          <li>TypeScript</li>
          <li>C#</li>
          <li>Ruby on Rails</li>
        </ul>
        <p className="list-label">Soft Skills:</p>
        <ul>
          <li>Firebase</li>
          <li>PostgresQL</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Postman</li>
        </ul>
        <p className="list-label">And I'm currently learning:</p>
        <ul>
          <li>Flask</li>
          <li>Python</li>
          <li>Sass</li>
          <li>MUI</li>
        </ul>
        <p>I'm currently searching for any junior developer opportunities and think hearing from you would be just grand.</p>
      </article> 
      <div className="button-74-container">
        <a href={resume} download={resume}><button className="button-74 confirm_selection">Resume</button></a>
        <Link to="/showcase"><button className="button-74 confirm_selection">Projects</button></Link>
      </div>
    </div>
  )
}

export default About
