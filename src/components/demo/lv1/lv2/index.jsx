import React, { useContext } from "react";
import { DemoContext } from "src/contexts/demoContext";

const Level2 = () => {
  const demoContext = useContext(DemoContext);

  const randomName = () => {
    return Math.random().toString(36).substring(7);
  };
  return (
    <div>
      <h3>{demoContext.lv2}</h3>
      <button onClick={() => demoContext.setTitle(randomName())}>
        Change text
      </button>
    </div>
  );
};

export default React.memo(Level2);
