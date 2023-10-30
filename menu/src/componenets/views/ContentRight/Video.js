import React from 'react'

const Video = () => {
  const videoStyle = {
    width: '90%',
    height: '50%',
    style: 'border',
    border: 'none',
}
  return (
      <iframe style={videoStyle} src="https://player.vimeo.com/video/142621240"
      title="food"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  )
}

export default Video
