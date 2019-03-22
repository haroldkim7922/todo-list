import React from "react";

const Todo = props => (
  <div
    className={
      props.info.complete ? "alert alert-success" : "alert alert-warning"
    }
  >
    <div className="row">
      <div className="col-4">
        <div>{props.info.desc}</div>
      </div>
      <div className="col-4">
        <div className="d-flex flex-row align-items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={e => {
              props.handleTaskComplete(props.info.id, e.target.checked);
            }}
          />
          <span>Completed</span>
        </div>
      </div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => props.handleRemoveTask(props.info.id)}
        >
          Remove
        </button>
      </div>
    </div>
  </div>
);

export default Todo;
