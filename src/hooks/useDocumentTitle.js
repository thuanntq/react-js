import { useEffect } from "react";

export const useDocumentTitle = (title = "title") => {
  useEffect(() => {
    document.title = title;
  });
};
