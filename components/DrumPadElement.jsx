const DrumPadElement = ({ keyData }) => {
  return (
    <li id={`${keyData.name}`} className="drum-pad">
      <audio id={`${keyData.key}`} src={keyData.sound_path} />
      <span>{keyData.key}</span>
    </li>
  );
};

export default DrumPadElement;
