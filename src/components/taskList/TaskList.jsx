import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/tasksSlice";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <ul className="list-group my-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex flex-column justify-content-between align-items-center my-2 py-2"
              >
                <h5 title="Title">{task.title}</h5>
                <p title="Description" className="mb-0">
                  {task.description}
                </p>
                <span
                  title="Priority"
                  className={`badge rounded-pill my-2 fs-6 ${
                    task.priority === "High"
                      ? "text-bg-primary"
                      : task.priority === "Medium"
                      ? "text-bg-warning"
                      : "text-bg-secondary"
                  }`}
                >
                  {task.priority}
                </span>
                <button
                  title="Remove todo"
                  type="button"
                  className="btn text-danger p-0"
                  onClick={() => handleDelete(task.id)}
                >
                  <span className="material-icons">delete_outline</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
};

export default TaskList;
