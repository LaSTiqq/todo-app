import { useState } from "react";
import { useSelector } from "react-redux";
import TaskForm from "./components/taskForm/TaskForm";
import TaskList from "./components/taskList/TaskList";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const [toggleModal, setToggleModal] = useState(true);

  const openModal = () => {
    setToggleModal(true);
  };

  const closeModal = () => {
    setToggleModal(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold mb-2">Todo list</h1>
      {tasks.length === 0 ? (
        <h5 className="text-muted text-center my-4">
          No tasks available. Add a new one...
        </h5>
      ) : (
        <TaskList tasks={tasks} />
      )}
      <button
        type="button"
        className="btn btn-info d-block mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#createModal"
        onClick={openModal}
      >
        Add task
      </button>
      {toggleModal && <TaskForm onClose={closeModal} />}
    </div>
  );
};

export default App;
