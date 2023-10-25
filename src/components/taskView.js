import React, { useState } from 'react';
import './taskView.css'; 
import { useNavigate } from 'react-router-dom';

const TaskView = ({ task }) => {
  const navigate = useNavigate();
  const [editableTask, setEditableTask] = useState({ ...task });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTask({
      ...editableTask,
      [name]: value,
    });
  };

  return (
    <div className="task-info"> 
      <label>
        Name:
        <input
          type="text"
          className="name-input"
          name="taskName"
          value={editableTask.taskName}
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
      <label>
        End Date:
        <input
          type="date"
          className="endDate-input"
          name="endDate"
          value={editableTask.endDate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        End Time:
        <input
          type="time"
          className="endTime-input"
          name="endTime"
          value={editableTask.endTime}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Project:
        <input
          type="text"
          className="project-input"
          name="projectName"
          value={editableTask.projectName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Assignee:
        <input
          type="text"
          className="assignee-input"
          name="assignee"
          value={editableTask.assignee}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Status:
        <input
          type="text"
          className="status-input"
          name="status"
          value={editableTask.status}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Priority:
        <input
          type="text"
          className="priority-input"
          name="priority"
          value={editableTask.priority}
          onChange={handleInputChange}
        />
      </label>
      <button className="update-button" onClick={() => navigate(`/reestimate-ticket`)}>
        Re-estimation
      </button>
    </div>
  );
};

export default TaskView;
