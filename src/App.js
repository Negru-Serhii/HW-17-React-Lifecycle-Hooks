import "./App.css";
import Timer from "./components/Timer";

function App() {
  const firstTimer = {
    startTimer: 10,
    step: 1,
    autoplay: true,
    id: 1,
  };

  const secondTimer = {
    startTimer: 10,
    step: 2,
    autoplay: false,
    id: 2,
  };

  return (
    <div>
      <Timer {...firstTimer} />
      <Timer {...secondTimer} />
    </div>
  );
}

export default App;
