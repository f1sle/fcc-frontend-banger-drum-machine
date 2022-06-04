import config from "./keysConfig.json";
import DrumMachine from "./components/DrumMachine";
import "./styles.scss";

export default function App() {
  const track = config.track;
  const trackKeys = config.keys;

  return (
    <main>
      <DrumMachine
        track={track}
        keys={trackKeys}
      />
    </main>
  );
}
