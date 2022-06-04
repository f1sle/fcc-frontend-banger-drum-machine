import { useState, useRef, useEffect } from 'react';
import { ImVolumeMute, ImVolumeLow, ImVolumeMedium, ImVolumeHigh } from 'react-icons/im';
import { FaPowerOff } from 'react-icons/fa';

const AudioPlayer = ({ trackPath, trackName, isTurnedOn, onToggle }) => {
  const trackRef = useRef(null);

  const [isTrackPaused, setIsTrackPaused] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(50);
  const [seekValue, setSeekValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleToggle = (e) => {
    e.preventDefault();
    trackRef.current.pause();
    trackRef.current.currentTime = 0;
    setIsTrackPaused(true);
    onToggle(!isTurnedOn);
  }

  const stop = () => {
    trackRef.current.pause();
    setIsTrackPaused(true);
  }
  
  const play = () => {
    trackRef.current.play()
    setIsTrackPaused(false);
  }

  const mute = () => {
    if (trackRef.current.value === 0) {
      trackRef.current.value = volumeLevel;
    } else {
      trackRef.current.volume = 0;
    }
    
  }

  const handleVolumeChange = (e) => {
    setVolumeLevel(e.target.value);
    trackRef.current.volume = e.target.value / 100;
  }

  return (
    <div id="audio-player">
      <audio ref={trackRef} autoPlay>
        <source src={trackPath} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div id="audio-player-display" className={isTurnedOn ? "audio-player-display--turnedOn" : "audio-player-display"}>
        <button id="play-button" className={!isTrackPaused ? "play-button--active" : "play-button"} onClick={isTrackPaused ? play : stop } disabled={!isTurnedOn} />
        <span id="current-time">{trackRef.duration}</span>
        <input id="seek-slider" type="range" min="0" max="100" value={seekValue} step="1" onChange={(e) => e.t} />
        <span id="track-name">{trackName}</span> 
        <span id="duration">{currentTime}</span>
      </div>
      
      <div className="audio-player-controls">
        <div className="audio-player-buttons">          
          <button id="mute-button" className="drum-control-button" onClick={mute}>
            <ImVolumeMedium />
          </button>
          <button id="player-toggle" className={isTurnedOn ? "drum-control-button--active" : "drum-control-button"} onClick={handleToggle}>
            <FaPowerOff />
          </button>
        </div>
        
        <input id="volume-slider" type="range" min="0" max="100" defaultValue={volumeLevel} onChange={handleVolumeChange} />  
      </div>
        
    </div>
  )
}

export default AudioPlayer;
  