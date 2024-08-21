import { useState } from "react";
import "./App.css";
import BetterLoader from "./components/wrapper/BetterLoader";
import Welcome from "./Welcome";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <BetterLoader isLoading={isLoading} animationSpeed={3}>
        <Welcome />
      </BetterLoader>
    </>
  );
}

export default App;
