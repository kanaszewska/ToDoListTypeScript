import React from "react";
import ToDoList from "./ToDoList";

import "../styles/NewSection.css";

const NewSection = (props: { name: string }) => {
  const { name } = props;
  return (
    <div className="newSection">
      <section className="user">
        <h3>{name}</h3>
        <ToDoList />
      </section>
    </div>
  );
};

export default NewSection;
