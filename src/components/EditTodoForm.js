import React from "react";

const EditTodoForm = ({ handleEditSubmit, setUpdatedValue }) => {
  return (
    <div>
      <input
        className="todo-input"
        type="text"
        id="newInput"
        onChange={(e) => setUpdatedValue(e.target.value)}
      />
      <button
        className="todo-button"
        type="submit"
        value="  edit to-do "
        onClick={handleEditSubmit}
      >
        update to-do
      </button>
    </div>
  );
};

export default EditTodoForm;
