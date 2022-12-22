import React from 'react'
import Typical from 'react-typical'

function Intro() {
  return (
    <div className="intro">
    <h1>Hi, I'm Youngwoo</h1>
    <p>
      I'm a {''}
      <Typical
        loop={Infinity}
        wrapper='p'
        steps={[
          ' developer',
          2000,
          ' eng student',
          2000,
        ]}
      /> 
    </p>
  </div>
  )
}

export default Intro