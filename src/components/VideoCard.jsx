import React from 'react';
import ReactPlayer from 'react-player';

const VideoCard = () => {
  return (
    <div className='player-wrapper'>
        <ReactPlayer  className='react-player'
          url='https://youtu.be/sVzKavzIKDI'
          width='100%'
          height='100%'/>
       
    </div>
  )
}

export default VideoCard