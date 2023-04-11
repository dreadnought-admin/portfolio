import React from 'react'

const About = () => {
  return (
    <div className="about">
     <article>
        <h1>Hi, I'm Dom.</h1>
        <h3>Wait. I think I already said that.</h3>
        <p>I'm a full-stack developer who has a penchant for React, TS, and ternary operators.</p>
        
        <p>In February 2023 I graduated from Flatiron School's full-stack software engineering program—but I certainly haven't stopped there.
          Through their cirriculum I discovered my affinity for React and we have been awful friends and dear enemies ever since.
        </p>
        <p className="list-label">Technical Skills:</p>
        <ul>
          <li>HTML5</li>
          <li>React</li>
          <li>React Native</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>CSS</li>
        </ul>
        <p className="list-label">Soft Skills:</p>
        <ul>
          <li>C#</li>
          <li>Rails</li>
          <li>Firebase</li>
        
          <li>SQL</li>
          <li>Git</li>
          <li>PostgresQL</li>
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
    </div>
  )
}

export default About
