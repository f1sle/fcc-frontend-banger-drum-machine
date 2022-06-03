import { useState } from "react";
import config from "../keysConfig.json";
import DrumMachine from "../components/DrumMachine";
import "./styles.scss";

export default function App() {
  const [trackNum, setTrackNum] = useState(0);
  const keysConfig = config[trackNum];

  return (
    <main>
      <DrumMachine
        selectedTrack={trackNum}
        keys={keysConfig}
        onTrackChange={setTrackNum}
      />
    </main>
  );
}
