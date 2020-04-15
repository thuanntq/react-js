import React from "react";
import { useResize } from "src/hooks/useResize";

const WindowSize = () => {
  const [width, isMdSize] = useResize();

  return (
    <div className="row">
      <p>Window width: {width}px</p>
      <p>is md size: {isMdSize.toString()}</p>
    </div>
  );
};

export default React.memo(WindowSize);
