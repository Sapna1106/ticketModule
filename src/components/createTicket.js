import React, { useState } from 'react';
import './createTicket.css';
import { useDispatch } from 'react-redux';
import { addTicket } from '../slice/taskSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateTicket = () => {
  const [ticketData, setTicketData] = useState({
    taskName: '',
    description: '',
    endDate: '',
    endTime: '',
    projectIn: 'project1', 
    assignee: 'assignee1', 
    stage: 'To Do', 
    priority: 'High',
  });
  
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleAddTicket = async (e) => {
  //   e.preventDefault();
  //   dispatch(addTicket(ticketData));
    
  //   setTicketData({
  //     taskName: '',
  //     description: '',
  //     endDate: '',
  //     endTime: '',
  //     projectIn: 'project1',
  //     assignee: 'assignee1',
  //     stage: 'To Do',
  //     priority: 'High',
  //   });
  //   navigate(`/my-tasks`);                                                                                                                            
  // };
  const handleAddTicket = async () => {
    if (ticketData.taskName && ticketData.description && ticketData.endDate && ticketData.endTime && ticketData.project && ticketData.assignee &&  ticketData.status && ticketData.priority ) {
      try {
        const response = await axios.post('http://localhost:8888/tickets', ticketData);
        const newTicket = response.data;
        dispatch(addTicket(newTicket));

        setTicketData({ 
          taskName: '',
          description: '',
          endDate: '',
          endTime: '',
          projectIn: 'project1', 
          assignee: 'assignee1', 
          stage: 'To Do', 
          priority: 'High', 
        }); 
        navigate(`/my-tasks`); 
      } catch (error) {
        console.error('Error saving ticket data:', error);
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData({
      ...ticketData,
      [name]: value,
    });
  };


  return (
    
    <div className="ticket-form">
      <h2>Add Ticket</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="taskName"
            value={ticketData.taskName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            rows="2"
            value={ticketData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={ticketData.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">End Time:</label>
            <input
              type="time"
              name="endTime"
              value={ticketData.endTime}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="projectIn">Project:</label>
          <select
            name="projectIn"
            value={ticketData.projectIn}
            onChange={handleInputChange}
            required
          >
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
            <option value="project3">Project 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="assignee">Assignee:</label>
          <select
            name="assignee"
            value={ticketData.assignee}
            onChange={handleInputChange}
            required
          >
            <option value="assignee1">Assignee 1</option>
            <option value="assignee2">Assignee 2</option>
            <option value="assignee3">Assignee 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="stage">Status:</label>
          <select
            name="stage"
            value={ticketData.stage}
            onChange={handleInputChange}
            required
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            name="priority"
            value={ticketData.priority}
            onChange={handleInputChange}
            required
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="button-container">
           <button type="button" align="left" id="cancel" onClick={() => navigate(`/my-tasks`)}>
             Cancel
           </button>
           <button type="submit" align="right" id="create" onClick={handleAddTicket}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTicket;
