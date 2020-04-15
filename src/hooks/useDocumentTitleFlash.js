import { useEffect } from "react";

export const useDocumentTitleFlash = (titles = []) => {
  useEffect(() => {
    const setTitle = (title) => {
      document.title = title;
    };

    let index = 0;
    const len = titles.length;

    const handlerChangeTitle = () => {
      if (typeof titles === "string") {
        setTitle(titles);
        return;
      }

      if (!Array.isArray(titles)) {
        return;
      }

      if (len === 0) {
        return;
      }

      if (len === 1) {
        setTitle(titles[0]);
        return;
      }

      if (index >= len) {
        index = 0;
      } else {
        setTitle(titles[index]);
        index++;
      }
    };

    const timer = setInterval(handlerChangeTitle, 2e3);

    return () => {
      clearInterval(timer);
    };
  }, [titles]);
};
