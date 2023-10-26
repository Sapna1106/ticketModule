import React, { useState, useEffect } from "react";
import "./taskView.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTask } from "../slice/taskSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const TaskView = ({ task, id, closeOffCanvas }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editableTask, setEditableTask] = useState({ ...task });
  const [date, setDate] = useState(new Date());
  // const id=parseInt(id, 10)

  useEffect(() => {
    loadTask(id);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTask({
      ...editableTask,
      [name]: value,
    });
  };

  const handleUpdateClick = async (e) => {
    // e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/tickets/${id}`, editableTask);
      dispatch(updateTask({id: id,updatedTask: editableTask}));
      closeOffCanvas();
      // navigate("/my-tasks");
    } catch (error) {
      console.error("Error updating Task:", error.message);
    }
  };

  const loadTask = async (e) => {
    try {
      const response = await axios.get(`http://localhost:8888/tickets/${id}`);
      setEditableTask(response.data);
    } catch (error) {
      console.error("Error loading task data:", error.message);
    }
  };

  // console.log("Task prop:", task);
  // console.log("Editable Task:", editableTask);
  
  return (
    <div className="task-info">
      <label>
        Name:
        <input
          type="text"
          className="name-input"
          name="name"
          value={editableTask.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          className="description-input"
          name="description"
          value={editableTask.description}
          onChange={handleInputChange}
        />
      </label>
      <div>
      <label>
        Start Date:
        <DatePicker
          selected={date}
          value={editableTask.startDate}
          onChange={(date) =>
            setEditableTask({ ...editableTask, startDate: date })
          }
          dateFormat="yyyy-MM-dd, yyyy-MM-dd'T'HH:mm:ss.SSSX"
          showTimeSelect
          minTime={new Date(0, 0, 0, 12, 30)}
          maxTime={new Date(0, 0, 0, 19, 0)}
        />
      </label>
    </div>
      <label>
        End Date:
        <DatePicker
          selected={date}
          value={editableTask.endDate}
          onChange={(date) => {
            setEditableTask({
              ...editableTask,
              endDate: date, // Update the endDate in editableTask
            });
          }}
          dateFormat="yyyy-MM-dd'T'HH:mm:ss.SSSX, yyyy-MM-dd'T'HH:mm:ss.SSS, EEE, dd MMM yyyy HH:mm:ss zzz, yyyy-MM-dd"
          showTimeSelect
          minTime={new Date(0, 0, 0, 12, 30)}
          maxTime={new Date(0, 0, 0, 19, 0)}
        />
      </label>
      <label>
        Project:
        <input
          type="text"
          className="project-input"
          name="projectIn"
          value={editableTask.projectIn.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Created By:
        <input
          type="text"
          className="createdBy-input"
          name="createdBy"
          value={editableTask.createdBy}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Assignee:
        <input
          type="text"
          className="assignee-input"
          name="assignee"
          value={editableTask.usersAssignedTo.firstName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Status:
        <select
          name="stage"
          value={editableTask.stage}
          onChange={handleInputChange}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
          <option value="On Hold">On Hold</option>
        </select>
      </label>
      <label>
        Priority:
        <select
          name="priority"
          value={editableTask.priority}
          onChange={handleInputChange}
        >
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>
      </label>
      <button
        className="update-button"
        onClick={() => navigate(`/reestimate-ticket`)}
      >
        Re-estimation
      </button>
      <button className="update-button" onClick={() => handleUpdateClick()}>
        Update
      </button>
    </div>
  );
};

export default TaskView;
