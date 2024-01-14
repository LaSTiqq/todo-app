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
          <ul className="list-group my-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="list-group-item d-flex flex-column justify-content-between align-items-center my-2 py-3"
              >
                <h5>{task.title}</h5>
                <p className="mb-0">{task.description}</p>
                <span className="badge bg-info">{task.priority}</span>
                <button
                  title="Remove todo"
                  type="button"
                  className="btn text-danger"
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
