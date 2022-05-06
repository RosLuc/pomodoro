import { useEffect, useState } from "react";
import { IClock } from "./clock.interface";

import "./styles.css";

interface TimerProps {
  startMinutes: number;
  startSeconds: number;
  isCounting?: boolean;
  stopCounting?: () => void;
}

function Timer({
  startMinutes,
  startSeconds,
  isCounting = true,
  stopCounting,
}: TimerProps) {
  const [clock, setClock] = useState<IClock>({
    minutes: startMinutes,
    seconds: startSeconds,
  });

  useEffect(() => {
    if (isCounting) {
      let myInterval = setInterval(() => {
        countDown();
      }, 1000);
      return () => clearInterval(myInterval);
    }
  });

  const countDown = () => {
    if (clock.seconds === 0) {
      if (clock.minutes > 0) {
        setClock((clock) => ({ minutes: clock.minutes - 1, seconds: 59 }));
      } else if (stopCounting) {
        stopCounting();
      }
    } else {
      setClock((clock) => ({
        minutes: clock.minutes,
        seconds: clock.seconds - 1,
      }));
    }
  };

  return (
    <span className="timer">{`${("00" + clock.minutes).slice(-2)}:${(
      "00" + clock.seconds
    ).slice(-2)}`}</span>
  );
}

export default Timer;
