import React from 'react';
import './taskView.css'; 
import { useNavigate } from 'react-router-dom';

const TaskView = ({ task }) => {
  const navigate= useNavigate();
  return (
    <div className="task-info"> 
      <label>
        Name:
        <input type="text" className="name-input" name="name" value={task.taskName} />
      </label>
      <label>
        Description:
        <input type="text" className="description-input" name="description" value={task.description} />
      </label>
      <label>
        End Date:
        <input type="date" className="endDate-input" name="endDate" value={task.endDate} />
      </label>
      <label>
        End Time:
        <input type="time" className="endTime-input" name="endTime" value={task.endTime} />
      </label>
      <label>
        Project:
        <input type="text" className="project-input" name="project" value={task.projectName} />
      </label>
      <label>
        Assignee:
        <input type="text" className="assignee-input" name="assignee" value={task.assignee} />
      </label>
      <label>
        Status:
        <input type="text" className="status-input" name="status" value={task.status} />
      </label>
      <label>
        Priority:
        <input type="text" className="priority-input" name="priority" value={task.priority} />
      </label>
      <button className="update-button" onClick={()=> navigate(`/reestimate-ticket`)}>
          Re-estimation
        </button>
    </div>
  );
};

export default TaskView;
