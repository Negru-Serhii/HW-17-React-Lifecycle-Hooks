import React, { useState, useEffect } from "react";

function Timer({ startTimer, step, autoplay, id }) {
  const [time, setTime] = useState(startTimer);
  const [activeTimer, setActiveTimer] = useState(autoplay ? true : false);
  const [widthTimerLine, setWidthTimerLine] = useState("100");
  const stepInPx = widthTimerLine / time;
  const timerValue = 1000;

  const clickButton = () => {
    setActiveTimer(!activeTimer);
    if (time === 0) {
      setWidthTimerLine("100");
      setTime(startTimer);
    }
  };

  useEffect(() => {
    document.getElementById(`${id}`).style.width = widthTimerLine + "%";

    const visualTimer = setInterval(function () {
      if (time !== 0 && activeTimer) {
        <p>{time}</p>;
        setTime(time - step);
        setWidthTimerLine(widthTimerLine - stepInPx * step);
      } else {
        if (!activeTimer) setActiveTimer(false);
      }
    }, step * timerValue);

    return function stopTimer() {
      clearInterval(visualTimer);
    };
  });

  return (
    <div className="timer">
      <p>{time}</p>
      <button onClick={clickButton}>
        {activeTimer && time !== 0 ? "Pause" : "Start"}
      </button>
      <div className="line" id={id}></div>
    </div>
  );
}

export default Timer;
