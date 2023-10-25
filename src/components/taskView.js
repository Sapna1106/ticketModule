import React, { useState , useEffect} from 'react';
import './taskView.css'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTask } from '../slice/taskSlice';
import axios from 'axios';
// import { format } from 'date-fns';

const TaskView = ({ task, id, closeOffCanvas }) => {
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const [editableTask, setEditableTask] = useState({ ...task });

  useEffect(() => {
    loadTask(id);
  }, [id]);

  // function formatDate(date) {
  //   return format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSS");
  // }
  
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
      dispatch(updateTask(editableTask));
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

  console.log("Task prop:", task); 
  console.log("Editable Task:", editableTask); 
  return (
    <div className="task-info"> 
      <label>
        Name:
        <input
          type="text"
          className="name-input"
          name="name"
          value={editableTask.name }
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
        Start Date:
        <input
          type="date"
          className="startDate-input"
          name="startDate"
          value={editableTask.startDate}
          // value={formatDate(editableTask.startDate)}
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
      <button className="update-button" onClick={() => navigate(`/reestimate-ticket`)}>
        Re-estimation
      </button>
      <button className="update-button" onClick={()=> handleUpdateClick()}>
        Update
      </button>
    </div>
  );
};

export default TaskView;
