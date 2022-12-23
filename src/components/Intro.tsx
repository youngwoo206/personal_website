import React from 'react'
import Typical from 'react-typical'

function Intro() {
  return (
    <div className="intro">
        <h1>Hi, I'm Youngwoo</h1>
        <p>
        <Typical
            loop={Infinity}
            wrapper='p'
            steps={[
                'software developer',
                2000,
                'engineering student',
                2000,
                'lifelong learner',
                2000,
                'lego enthusiast',
                2000,
                'raptors fan',
                2000,
            ]}
        /> 
        </p>
    </div>
  )
}

export default Intro