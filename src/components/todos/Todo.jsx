import React, { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";
import TodoList from "./TodoList";

const Todo = () => {
  const [params, setParams] = useState({
    _start: 0,
    _limit: 10,
  });

  const data = useFetchData(params);

  const prevPage = () => {
    if (params._start > 0) {
      setParams((prev) => ({
        ...prev,
        _start: prev._start - prev._limit,
      }));
    }
  };

  const nextPage = () => {
    if (params._start < 50) {
      setParams((prev) => ({
        ...prev,
        _start: prev._start + prev._limit,
      }));
    }
  };

  return (
    <div>
      <div className="row-flex">
        <button onClick={prevPage}>Prev</button>
        <strong>TODO list</strong>
        <button onClick={nextPage}>Next</button>
      </div>

      <div className="row">
        {data.loading && <h3>Loading</h3>}
        <TodoList data={data.items} />
      </div>
    </div>
  );
};

export default React.memo(Todo);
