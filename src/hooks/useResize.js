import { useState, useEffect } from "react";

const isMdSize = () => {
  const match = window.matchMedia("(min-width:768px)");
  return match.matches;
};

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [mdSize, setMdSize] = useState(isMdSize());

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setMdSize(isMdSize());
    };

    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize, false);
    };
  }, [width, mdSize]);

  return [width, mdSize];
};
