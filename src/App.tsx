import { useEffect, useState } from "react";
import "./App.css";
import BetterLoader from "./components/wrapper/BetterLoader";
import { SKELETON_CONFIG } from "./config/constant";
import { gridSchema } from "./components/layout/schema";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [schema, setSchema] = useState(JSON.stringify(gridSchema));
  const [textAreaContent, setTextAreaContent] = useState(schema);
  const [animationSpeed, setAnimationSpeed] = useState(
    SKELETON_CONFIG.speed.default
  );
  const [gradientAngle, setGradientAngle] = useState(
    SKELETON_CONFIG.angle.default
  );
  const [gridGap, setGridGap] = useState(SKELETON_CONFIG.gridGap.default);

  useEffect(() => {
    console.log("Schema Updated", textAreaContent);
  }, [textAreaContent]);

  const handleSubmit = () => {
    try {
      JSON.parse(textAreaContent);
      setSchema(textAreaContent);
    } catch (error) {
      alert("Invalid Schema File, Please check the JSON format.");
      console.log(error);
      return;
    }
  };

  return (
    <div className="body-container">
      <BetterLoader
        schema={JSON.parse(schema)}
        isLoading={isLoading}
        animationSpeed={animationSpeed}
        gradientAngle={gradientAngle}
        gridGap={gridGap}
      >
        <div className="welcome">
          <h2>😃</h2>
          <p>Hi, Good to see you.</p>
        </div>
      </BetterLoader>
      <div className="action-section">
        <h2>Customize Skeleton</h2>
        <textarea
          value={textAreaContent} // ensure textarea shows correct content
          onChange={(e) => setTextAreaContent(e.target.value)}
        />
        <div>
          <div>
            <label>Animation Speed</label>
            <input
              type="range"
              min={SKELETON_CONFIG.speed.min}
              max={SKELETON_CONFIG.speed.max}
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(Number(e.target.value))}
            />
            <span>{animationSpeed}</span>
          </div>
          <div>
            <label>Gradient Angle </label>
            <input
              type="range"
              min={SKELETON_CONFIG.angle.min}
              max={SKELETON_CONFIG.angle.max}
              value={gradientAngle}
              onChange={(e) => setGradientAngle(Number(e.target.value))}
            />
            <span>{gradientAngle}</span>
          </div>
          <div>
            <label>Gradient Gap </label>
            <input
              type="range"
              min={SKELETON_CONFIG.gridGap.min}
              max={SKELETON_CONFIG.gridGap.max}
              value={gridGap}
              onChange={(e) => setGridGap(Number(e.target.value))}
            />
            <span>{gridGap}</span>
          </div>
          <button onClick={handleSubmit}>Apply Schema</button>
          <button onClick={() => setIsLoading((prev) => !prev)}>
            {isLoading ? "Stop" : "Start"} Loading
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
