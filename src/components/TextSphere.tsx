import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'

function TextSphere() {

    useEffect(() => {
        return () => {
            const container = ".tagcloud"
            const text = [
                "HTML",
                "CSS",
                "JavaScript",
            ]
            const options = {
                radius: 200,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            }

            TagCloud(container, text, options)
      }
    },[])

  return (
    <div className='text-sphere'>
        <span className='tagcloud'></span>
    </div>
  )
}

export default TextSphere