import React from "react";
import { DemoProvider } from "./DemoContextProvider";
import Level1 from "./lv1";
import { useState } from "react";

const Demo = () => {
  const [title, setTitle] = useState("Demo Component");

  return (
    <DemoProvider setTitle={setTitle}>
      <h1>{title}</h1>
      <Level1 />
    </DemoProvider>
  );
};

export default React.memo(Demo);
