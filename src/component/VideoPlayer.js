import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import rabbit from '../video/rabbit.mp4';
import agent from '../video/agent.mp4';
// import './videoPlayer.scss';

// import UseState from './UseState';

function VideoPlayer() {
    const urls = [rabbit, agent]
    // const [next, setNext] = useState(rabbit)
    const [played, setPlayed] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    // const [forward , setForward] = useState(true)

    // const next_video = () => {
    //     const store = [rabbit, agent]
    //     let count = 0
    //     if (store.length > count) {
    //         setNext(store[++count])
    //     }
    //     console.log('clicked')
    // }
    // const back_video = () => {
    //     const store = [rabbit, agent]
    //     let count = 0
    //     // if(store.length > count){
    //     // } 
    //     setNext(store[--store.length - 1])
    //     console.log('clicked')
    // }
    return (
        <div className="App">

            <h3>total time = {duration}</h3>
            <h3>current time = {played}</h3>
            <h3>remaining time = {duration - played}</h3>

            <ReactPlayer
                url={urls[currentUrlIndex]}
                width='480px'
                height='240px'
                config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                onContextMenu={e => e.preventDefault()}
                onEnded={() => setShowNextButton(true)}
                controls 
                onSeek = {(seek) => 
                    
                    console.log("seek = ",seek  )
                }
                playsinline = {false}
                pip
                // timeupdate
                // className='video_player'
                isEnabled = {(enabled) => console.log('e =',enabled)}
                onReady={() => console.log('onReady callback')}
                onStart={() => console.log('onStart callback')}
                onPause={() => console.log('on pause callback')}
                // onEnded={() => console.log('on ended callback')}
                onBuffer={(buffering) => 
                    // buffering.cancelable 
                    console.log('buffering', buffering)
                  }
                onDuration={(duration) => {
                    console.log('onDuration', duration)
                    setDuration(duration)
                }}
                onProgress={(progress) => {
                    progress.played = null
                   console.log("played =",  progress.played)
                   console.log("loaded =", progress.loaded)
                    setPlayed(progress.playedSeconds);
                }}
            />
            {showNextButton && (
                <button
                    onClick={() => {
                        setCurrentUrlIndex(
                            prevUrlIndex => (prevUrlIndex + 1) % urls.length
                        )
                        setShowNextButton(false)
                    }}
                    
                >
                    next
                </button>
            )}
            {/* <button onClick={back_video}>back</button>
                 <button onClick={next_video}>Next</button> */}
        </div>
    )
}

export default VideoPlayer
