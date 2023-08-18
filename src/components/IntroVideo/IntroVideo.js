import React from 'react'
const IntroVideo = () => {
  let props = '4Erhrcz0I-4'
  return (
    <div style={{height:"880px",color:'red',display:"flex",justifyContent:"center",alignItems:"center"}} >
       <iframe
        width="1000px"
        height="600px"
        src={`https://www.youtube.com/embed/${props}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default IntroVideo