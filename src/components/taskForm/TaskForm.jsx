import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/tasksSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const priorities = useSelector((state) => state.priorities);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, priority }));
    setTitle("");
    setDescription("");
    setPriority("");

    // Close the modal after submitting the form
    const backdropElement = document.querySelector(".modal-backdrop");
    const modalElement = document.getElementById("taskFormModal");

    const toggleDisplay = (element, show) => {
      element.style.display = show ? "block" : "none";
      if (element === backdropElement) {
        element.style.transition = "none";
      }
    };

    if (modalElement && modalElement.classList.contains("show")) {
      toggleDisplay(modalElement, false);
      toggleDisplay(backdropElement, false);
    } else {
      toggleDisplay(modalElement, true);
      toggleDisplay(backdropElement, true);
    }
  };

  return (
    <div className="modal fade" id="taskFormModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title d-block mx-auto">Add Task</h3>
          </div>
          <div className="modal-body pb-0">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label d-block">
                  Title
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    name="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label d-block">
                  Description
                  <textarea
                    className="form-control"
                    value={description}
                    name="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </label>
              </div>
              <div className="mb-3">
                <label className="form-label d-block">
                  Priority
                  <select
                    className="form-select"
                    value={priority}
                    name="Priority"
                    onChange={(e) => setPriority(e.target.value)}
                    required
                  >
                    {priorities.map((priorityOption) => (
                      <option key={priorityOption} value={priorityOption}>
                        {priorityOption}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#taskFormModal"
                >
                  Save Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
