import React, {useState} from 'react'
import '../styles/TextSphere.css'
import "../styles/Skills.css"
import TextSphere from './TextSphere'

function Skills() {

    const [tab, setTab] = useState(1)

    const toggleTab = () => {

    }

  return (
    <div className='skills'>
        <h1>My Skills:</h1>
        <TextSphere />
          
        <div className='skill-container'>
              <div className='bloc-tabs'>
                  <div className='tabs active-tabs' onClick={toggleTab}>Tab 1</div>
                  <div className='tabs' onClick={toggleTab}>Tab 2</div>
                  <div className='tabs' onClick={toggleTab}>Tab 3</div>
            </div>
        </div>
    </div>
  )
}

export default Skills