import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function EditTask({ modal, toggle, updateTask, save, taskobj }) {
  const [taskNameInput, setTaskNameInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskNameInput(value);
    } else {
      setDescInput(value);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Vérifier si les valeurs ont changé avant de mettre à jour
    if (taskNameInput !== taskobj.Name || descInput !== taskobj.description) {
      const updatedTask = {
        Name: taskNameInput,
        description: descInput,
      };
      updateTask(updatedTask);
    }
  };

  useEffect(() => {
    setTaskNameInput(taskobj.Name);
    setDescInput(taskobj.description);
  }, [taskobj]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="taskName">Task Title</label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                placeholder="Edit Title"
                value={taskNameInput}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Add Precise Description here:"
                value={descInput}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
