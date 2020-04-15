import React from "react";

const TodoList = ({ data }) => {
  return (
    <div className="row">
      <ul style={{ textAlign: "left" }}>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);
