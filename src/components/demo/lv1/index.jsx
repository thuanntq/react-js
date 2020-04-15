import React, { useContext } from "react";
import Level2 from "./lv2";
import { DemoContext } from "src/contexts/demoContext";

const Level1 = () => {
  const demoContext = useContext(DemoContext);

  return (
    <div>
      <h2>{demoContext.lv1}</h2>
      <Level2/>
    </div>
  );
};

export default React.memo(Level1);
