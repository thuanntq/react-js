import React from "react";
import { DemoContext } from "src/contexts/demoContext";

const Provider = ({ children, setTitle }) => {
  const tree = {
    lv1: "Level 01",
    lv2: "Level 02",
    setTitle,
  };

  return <DemoContext.Provider value={tree}>{children}</DemoContext.Provider>;
};

/** Custom name */
Provider.displayName = 'DemoProvider';

export const DemoProvider = React.memo(Provider);
