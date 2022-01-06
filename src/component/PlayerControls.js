import React, { forwardRef } from "react"
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import Button from '@material-ui/core/Button';
import FullScreenIcon from "@material-ui/icons/Fullscreen";
import PauseIcon from "@material-ui/icons/Pause";
import VolumeOff from "@material-ui/icons/VolumeOff";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@material-ui/icons/FastForward";


const useStyles = makeStyles({

  controlsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },
  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
})

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}


const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default forwardRef(
  ({
    onPlayPause,
    
    playing,
    muted,
    onMute,
    onVolumeChange,
    onVolumeSeekDown,
    volume,
    onToggleFullScreen,
    elapsedTime,
    totalDuration,
    played,
    onRewind,
    onFastForward,
    onSeek,
    onSeekMouseDown,
    onSeekMouseUp,
    control_video,
    progress,
    data,
    duration 


  }, ref) => {
    const classes = useStyles();
    return (
      <div className={classes.controlsWrapper} ref={ref}>
        <Grid
          container
          direction='row'
          alignment='center'
          justify='space-between'
          style={{ padding: 16 }}
        >
          <Grid item>
            <Typography variant='h5' style={{ color: '#fff' }}>
              Video Title
            </Typography>
          </Grid>
        </Grid>

        {/* middle control */}
        {/* {elapsedTime === totalDuration && */}
        <Grid
          container direction="row" alignItems="center" justify="center"
        >
          <IconButton
            onClick={onRewind}
            className={classes.controlIcons}
            aria-label="rewind"
          >
            <FastRewindIcon
              className={classes.controlIcons}
              fontSize="inherit"
            />
          </IconButton >
          <IconButton onClick={onPlayPause} className={classes.controlIcons} aria-label='reqind'>
            {playing ? (
              <PauseIcon fontSize="large" />
            ) : (
              <PlayArrowIcon fontSize="large" />
            )}
          </IconButton>
          
          <IconButton
            onClick={onFastForward}
            className={classes.controlIcons}
            aria-label="forward"
          >
            <FastForwardIcon fontSize="inherit" />
          </IconButton>

        </Grid>
        {/* } */}

        {/* buttom control */}
        <Grid
          container
          direction='row'
          alignment='center'
          justify='space-between'
          style={{ padding: 16 }}
        >
          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              disabled = {(progress/duration)*100 < data}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              )}
              // onChange={onSeek}
              // onMouseDown={onSeekMouseDown}
              // onChangeCommitted={onSeekMouseUp}
            />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='row'
              alignment='center'
            >
              <IconButton onClick={onPlayPause} className={classes.bottomIcons}>
                {playing ? (
                  <PauseIcon fontSize="large" />
                ) : (
                  <PlayArrowIcon fontSize="large" />
                )}
              </IconButton>



              <IconButton onClick={onMute} className={classes.bottomIcons}>
                {muted ? <VolumeOff fontSize='large' /> : <VolumeUpIcon fontSize='large' />}
              </IconButton>
              <Slider
                min={0}
                max={100}
                value={volume * 100}
                className={classes.volumeSlider}
                onChange={onVolumeChange}
                onChangeCommitted={onVolumeSeekDown}
              />
              <Button
                variant="text"
                style={{ color: '#fff', marginLeft: 16 }}
              >
                <Typography>{elapsedTime}/{totalDuration}</Typography>
              </Button>
            </Grid>

          </Grid>
          <Grid item>

            <IconButton
              onClick={onToggleFullScreen}
              className={classes.bottomIcons}
            >
              <FullScreenIcon fontSize='large' />
            </IconButton>


          </Grid>


        </Grid>
      </div>
    )
  })