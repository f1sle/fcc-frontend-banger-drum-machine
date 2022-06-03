import DrumPadElement from "../components/DrumPadElement";

const DrumMachine = ({ selectedTrack, keys, onTrackChange }) => {
  return (
    <section id="drum-machine">
      <header id="drum-machine-header">
        <div className="logo">
          <div>AKAI</div>
          <span className="logo-subtitle">PROFESSIONAL</span>
        </div>
        <span className="model">MPD215</span>
      </header>
      <div id="display">{/* <aside>test</aside> */}</div>
      <ul id="drum-controller">
        {keys.map((key) => (
          <DrumPadElement key={key.key} keyData={key} />
        ))}
      </ul>
    </section>
  );
};

export default DrumMachine;
