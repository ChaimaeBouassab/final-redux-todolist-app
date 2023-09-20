import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CreateTasks({ modal, toggle, save }) {
  const [taskName, setTaskName] = useState("");
  const [desc, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  const handleSave = () => {
    if (taskName.trim() === "") {
      // Ajoutez une validation ici si le titre est requis
      return;
    }

    const taskObj = {
      Name: taskName,
      description: desc,
    };
    save(taskObj);

    // Réinitialisez les champs après avoir enregistré
    setTaskName("");
    setDescription("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="taskName">Task Title</label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                placeholder="Enter Title"
                value={taskName}
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
                value={desc}
                onChange={handleChange}
                name="description"
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
