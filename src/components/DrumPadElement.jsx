import { useEffect, useRef } from "react";

const DrumPadElement = ({ keyData, onClick, isTurnedOn }) => {

  return (
    <li id={`${keyData.key}`} className={isTurnedOn ? "drum-pad--turnedOn" : "drum-pad"} onClick={onClick}>
      {/*<audio id={`${keyData.key}`} src={keyData.sound_path} />*/}
      <span>{keyData.key}</span>
    </li>
  );
};

export default DrumPadElement;
