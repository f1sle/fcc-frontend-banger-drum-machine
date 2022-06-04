import { useEffect, useState, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import DrumPadElement from "./DrumPadElement";

const DrumMachine = ({ track, keys }) => {
  const [isTurnedOn, setIsTurnedOn] = useState(false);
  const keyBindings = keys.map(key => key.key);

  const handleToggle = (state) => {
    setIsTurnedOn(state);
  }

  const handleKeydown = (e) => {
    const index = keyBindings.indexOf(String(e.key).toUpperCase());
    if (index >= 0) {
      new Audio(keys[index].path).cloneNode().play();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  },[])


  return (
    <section id="drum-machine">
      <header id="drum-machine-header">
        <div className="logo">
          <div>AKAI</div>
          <span className="logo-subtitle">PROFESSIONAL</span>
        </div>
        <span className="model">MPD215</span>
      </header>
      <div id="track-display">
        <AudioPlayer trackPath={track.path} trackName={track.name} isTurnedOn={isTurnedOn} onToggle={handleToggle} />
      </div>
      <ul id="drum-controller">
        {keys.map((key) => (
          <DrumPadElement key={key.key} keyData={key} onClick={handleKeydown} isTurnedOn={isTurnedOn} />
        ))}
      </ul>
    </section>
  );
};

export default DrumMachine;
