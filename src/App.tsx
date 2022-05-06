import { useEffect, useState } from "react";
import "./App.css";
import Timer from "./components/timer";

function App() {
  const [isCounting, setIsCounting] = useState(false);

  const handleStopCounting = () => setIsCounting(true);
  const handleStartCounting = () => setIsCounting(true);

  return (
    <div className="container background-blue">
      <div className="card main-card">
        <Timer
          startMinutes={25}
          startSeconds={0}
          isCounting={isCounting}
          stopCounting={handleStopCounting}
        />

        <button onClick={handleStartCounting}>Iniciar</button>
      </div>
    </div>
  );
}

export default App;
