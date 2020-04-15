import { useEffect, useState } from "react";

const getFeachUrl = (params) => {
  let query = [];
  for (let key in params) {
    query.push(`${key}=${params[key]}`);
  }
  return `https://jsonplaceholder.cypress.io/todos?${query.join("&")}`;
};

export const useFetchData = (params) => {
  const [data, setData] = useState({
    loading: true,
    items: [],
  });
  useEffect(() => {
    const url = getFeachUrl(params);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData((prev) => ({
          ...prev,
          loading: false,
          items: result,
        }));
      })
      .catch((e) => {
        setData((prev) => ({
          ...prev,
          loading: false,
        }));
      });
  }, [params]);

  return data;
};
