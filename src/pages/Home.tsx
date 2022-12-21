import React from "react";
import '../styles/Home.css'
import Typical from 'react-typical'
function Home() {
  return(
  <div className="home">
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
  </div>
)}

export default Home;
