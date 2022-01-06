// import logo from './logo.svg';
// import './App.css';
import User from './component/User';
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Input from './component/Input';
import Hide_Show from './component/Hide_Show';
import Form from './component/Form';
import Form_Validations from './component/Form_Validations';
import Passing_Functions from './component/Passing_Function';
import DidMount from './component/componentDidMount';
import DidUpdate from './component/componentDidUpdate';
import ComponentShouldUpdate from './component/ComponentShouldUpdate';
import ComponentWillUnMount from './component/ComponentWillUnMount';
import UseState from './component/UseState';
import UseEffect from './component/UseEffect';
import UseEffectCondition from './component/UseEffectCondition';
import LiftingStateUp from './component/LiftingStateUp';
import Todo from './component/Todo';
import Object_useState from './component/Object_useState';
import Clock_class from './component/Clock_class';
import Clock_hooks from './component/Clock_hooks';
// import VideoPlayer from './component/VideoPlayer';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Button from '@material-ui/core/Button';
import FullScreenIcon from "@material-ui/icons/Fullscreen";
import PlayerControls from './component/PlayerControls';
// import Strike_function from './component/Strike_function';
import rabbit from './video/rabbit.mp4';
import agent from './video/agent.mp4';
import screenful from "screenfull";
import Quiz from './component/Quiz';




const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",

  },

})



const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
  // console.log("date=",`${mm}:${ss}`)
};

const strike_function = (c_time, t_time) => {
  if (t_time != c_time) {
    if (Math.floor(c_time) % 30 === 0) {
      console.log("c_time = ", c_time)
    }
  }
  else if (t_time === c_time) {
    console.log("t_time = ", t_time)
  }
}




let count = 0;
let progress = 0;
let range_count = 0


function App() {
  const classes = useStyles();
  const [next, setNext] = useState(rabbit);
  const [strike_data, set_strike_data] = useState(0)

  const [minute, set_minute] = useState(0)
  const [second, set_second] = useState(0)
  const [max_render, set_max_render] = useState(0)

  const playerRef = useRef(null)
  const playerContainerRef = useRef(null)
  const controlsRef = useRef(null);



  const [state, setState] = useState({
    playing: false,

    muted: false,
    played: 0,
    // duration: 0,
    volume: 1,
    seeking: false,
  });

  const {
    playing,

    muted,
    played,
    seeking,
    volume,
  } = state;

  const currentTime =
    playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";


  const duration =
    playerRef.current ? playerRef.current.getDuration() : "00:00";

  const interval = strike_function(currentTime, duration)
  // setData(strike_function(currentTime))

  const elapsedTime = format(currentTime)
  const totalDuration = format(duration);

  const [data, setData] = useState(0)

  useEffect(() => {
    if (strike_data < Math.floor(currentTime)) {
      set_strike_data(Math.floor(currentTime))
    }
    // if (max_render < Math.floor(currentTime)) {
    //   set_max_render(Math.floor(currentTime))
    //   console.log("render = ", max_render)
    // }
    // set_strike_data(prev => prev <  Math.floor(currentTime))
    // return ()=>{
    //   console.log("unmount")
    //   // set_strike_data(0)
    // }
  }, [state.playing])

  useEffect(() => {
    // set_strike_data(prev => prev <  Math.floor(currentTime) ?  Math.floor(currentTime) :prev)
    return () => {
      // console.log("unmount")
      set_strike_data(0)
      set_minute(0)
      set_second(0)
      setData(0)
      set_max_render(0)
      progress = 0
    }
  }, [next])




  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
    // set_strike_data(Math.floor(currentTime))
  };
  const handleFastForward = () => {
    if (strike_data > Math.floor(currentTime)) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 5);
    }
  }
  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
    if (strike_data < Math.floor(currentTime)) {
      set_strike_data(Math.floor(currentTime))

    }
    // set_strike_data(prev => prev <  Math.floor(currentTime) )
    console.log('str =', strike_data)
  };


  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100), muted: newValue === 0 ? true : false, });
  };
  const handleVolumeChange = (e, newValue) => {
    // console.log(newValue);
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };
  const toggleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
  };
  const handleMouseMove = () => {
    console.log("mousemove");
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
    if (progress < changeState.playedSeconds) {
      progress = changeState.playedSeconds
    }

    // console.log("ch =", progress)
  };

  // const changeVideo = ()=>{
  //   console.log("button clicked")
  // } 
  const next_video = () => {
    const store = [rabbit, agent]
    let count = 0
    if (store.length > count) {
      setNext(store[++count])
    }
    console.log('clicked')
  }
  const back_video = () => {
    const store = [rabbit, agent,]
    let count = 0
    // if(store.length > count){
    // } 
    setNext(store[--store.length - 1])
    console.log('clicked')
  }


  // useEffect(() => {
  //   if(state.playing){
  //   var interval = setInterval(() => {
  //     setData(Math.floor(currentTime))
  //     console.log("current time = " ,Math.floor(currentTime))
  //   }, 5000)}
  //   return ()=>{
  //     clearInterval(interval)
  //   }
  // },[state.playing])

  const handleSeekChange = (e, newValue) => {

    setState({ ...state, played: parseFloat(newValue / 100) });

  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });

  };

  const handleSeekMouseUp = (e, newValue) => {
    console.log({ value: e.target });


    console.log("progress = ", newValue, e.target.value)

    setState({ ...state, seeking: false });
    setData(newValue)
    // playerRef.current.seekTo(newValue);
    if ((progress / duration) * 100 > newValue) {
      playerRef.current.seekTo(newValue);

    }
    // setData(newValue )

  };
  

  useEffect(() => {
    const rangeHeight = document.getElementById("rangeHeight");
    const bubbleHeight = document.getElementById("bubbleHeight");

    const setValue = () => {
      // const newValue = Number(
      //   ((rangeHeight.value - rangeHeight.min) * 100) /
      //   (rangeHeight.max - rangeHeight.min)
      // );
      // const newPositionHeight = 10 - newValue * 0.2;

      bubbleHeight.innerHTML = `<span>${format(rangeHeight.value)}&nbsp;</span>`;
      // bubbleHeight.style.left = `calc(${newValue}% + (${newPositionHeight}px))`;
    };

    // document.addEventListener("DOMContentLoaded", setValue);
    rangeHeight.addEventListener("input", setValue);

    //Set default value of both the inputs
    document.getElementById("rangeHeight").value = 0;
  }, []);

  // function selectedEffectHeight(e) {
  //   const val = (e.target.value - 0) * 1.11;
  //   e.target.style.background =
  //     "linear-gradient(to right, #fff 0%, #fff " +
  //     val +
  //     "%, #f0959a " +
  //     val +
  //     "%, #f0959a 100%)";
  // }


  return (
    // <div className="App">
    // <VideoPlayer/>
    // </div>
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>React Video Player</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md">
        <div
          ref={playerContainerRef}
          className={classes.playerWrapper}
          onMouseMove={handleMouseMove}
        >
          {/* top controls */}
          <ReactPlayer
            ref={playerRef}
            url={next}
            width={"100%"}
            height="100%"
            muted={muted}
            playing={playing}
            volume={volume}
            onProgress={handleProgress}

          />
          <PlayerControls
            ref={controlsRef}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            // onPlay={handlePlay}
            // onPause={handlePause}

            onFastForward={handleFastForward}
            playing={playing}
            muted={muted}
            onMute={hanldeMute}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            volume={volume}
            onToggleFullScreen={toggleFullScreen}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            played={played}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            // control_video={handle_control_video}
            progress={progress}
            data={data}
            duration={duration}
          />
        </div>
      </Container>
      <Button onClick={back_video}>Back</Button>
      <Button onClick={next_video}>Next</Button>
      {/* <Button onClick={hanldeMute}>Mute</Button> */}
      {muted ?
        <Button onClick={hanldeMute}> Unmute</Button> :
        <Button onClick={hanldeMute}>Mute</Button>}
      <Button onClick={handleRewind}>Rewind -5</Button>
      <Button onClick={handleFastForward}>Forward +5</Button>
      {playing ? (
        <Button onClick={handlePlayPause}>Pause </Button>
      ) : (
        <Button onClick={handlePlayPause}>Play</Button>
      )}
      <div>
        <h3>total time = {totalDuration}</h3>
        <h3>elapsed time = {elapsedTime}</h3>
        {/* <h3>strike time = {interval}</h3> */}
        {/* { strike_function } */}
        {/* <form onSubmit={(e)=>{ 
        //  e.target.reset()
         e.preventDefault()
          playerRef.current.seekTo(minute + second)
          set_minute(0)
          set_second(0)
          console.log('data = ',(minute + second))
          
          }}>
        <label>Change Time :-</label> 
        <input type="number" onChange={(e)=> set_minute(Number(e.target.value) * 60 )}/>
        Minute
        <input type="number" onChange={(e)=> set_second(Number(e.target.value) )}/>
        Second
        <Button type='submit' disabled={progress < (minute + second) }>Submit</Button>
          </form> */}

        <div>
          <div id="bubbleHeight">
            <span>{format(currentTime)}&nbsp;</span>
          </div>

          <label><b>Player Control Range :</b>  </label>
          <input
            id="rangeHeight"
            type="range"
            min={0} max={Math.floor(duration)}
            value={currentTime}
            // disabled={progress < max_render}
            onChange={(e, max_render) => {
              console.log("render = ", e.target.value)

              set_max_render(e.target.value)
              if (progress > e.target.value) {
                playerRef.current.seekTo(e.target.value)
              } else {
                playerRef.current.seekTo(progress)

              }
            }}
          // onInput={selectedEffectHeight}
          // onMouseMove ={mouse_range}

          />
          <h1>Percentage of video complete : {Math.floor((progress / duration) * 100)}% </h1>
        </div>

      </div>
      <Quiz/>
    </>

  );
}

export default App;
