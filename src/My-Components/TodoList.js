import React, { useEffect, useState } from "react";
import CreateTasks from "../models/CreateTasks";
import Cards from "../My-Components/Cards";

export const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("taskList")) || [];
    setTaskList(savedList);
  }, []);

  const updateTaskList = (newList) => {
    localStorage.setItem("taskList", JSON.stringify(newList));
    setTaskList(newList);
  };

  const deleteTask = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    updateTaskList(updatedList);
  };

  const updateListArray = (obj, index) => {
    const updatedList = [...taskList];
    updatedList[index] = obj;
    updateTaskList(updatedList);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskobj) => {
    const updatedList = [...taskList, taskobj];
    updateTaskList(updatedList);
    setModal(false);
  };

  return (
    <>
      <div className="Header text-center">
        <h3>ToDO-Lister</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-Container">
        {taskList.map((obj, index) => (
          <Cards
            key={index} // Assurez-vous d'utiliser une clé unique
            taskobj={obj}
            index={index}
            deleteTask={deleteTask}
            updateListarray={updateListArray}
          />
        ))}
      </div>
      <CreateTasks toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};
