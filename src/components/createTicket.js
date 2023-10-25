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
    assignees: [],
    stage: 'To Do',
    priority: 'HIGH',
  });
  const [selectedAssignees, setSelectedAssignees] = useState([]); 
  const [searchQuery, setSearchQuery] = useState(''); 
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddTicket = async () => {
    try {
      const response = await axios.post('http://localhost:8888/tickets', ticketData);
      const newTicket = response.data;
      dispatch(addTicket(newTicket));
      resetForm();
      navigate(`/my-tasks`);
    } catch (error) {
      console.error('Error saving ticket data:', error);
    }
  };
  const resetForm = () => {
    setTicketData({
      taskName: '',
      description: '',
      endDate: '',
      endTime: '',
      projectIn: 'project1',
      assignees: [],
      stage: 'To Do',
      priority: 'HIGH',
    });
    setSelectedAssignees([]); // Clear the list of selected assignees
  };
  const handleAssigneeSelect = (assignee) => {
    if (!selectedAssignees.includes(assignee)) {
      setSelectedAssignees([...selectedAssignees, assignee]);
      setTicketData({
        ...ticketData,
        assignees: [...selectedAssignees, assignee],
      });
    }
  };
  const handleAssigneeRemove = (assignee) => {
    const updatedAssignees = selectedAssignees.filter((name) => name !== assignee);
    setSelectedAssignees(updatedAssignees);
    setTicketData({
      ...ticketData,
      assignees: updatedAssignees,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'assigneesSearch') {
      // Handle the search query input
      setSearchQuery(value);
    } else if (name === 'assignees') {
      // Handle multiple assignee selection
      const selectedAssignee = e.target.value;
      if (selectedAssignee) {
        handleAssigneeSelect(selectedAssignee);
        e.target.value = ''; // Clear the selection to make it work like a toggle
      }
    } else {
      setTicketData({
        ...ticketData,
        [name]: value,
      });
    }
  };
   // Filter Assignees based on the search query
   const filteredAssignees = [
    'Assignee 1',
    'Assignee 2',
    'Assignee 3',
    'Assignee 4',
    'Assignee 5',
    'Assignee 6',
    'Assignee 7',
    'Assignee 8',
    'Assignee 9',
    // Add your assignee options here
  ].filter((assignee) =>
    assignee.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="ticket-form">
      <h2>Add Ticket</h2>
      <form onSubmit={handleAddTicket}>
        <div className="form-group">
          <label htmlFor="taskName">Name:</label>
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
         {/* Assignee selection with search field */}
         <div className="form-group">
          <label htmlFor="assignees">Assignee:</label>
          <input
            type="text"
            name="assigneesSearch"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search Assignee"
          />
          <select
            name="assignees"
            value={[]}
            onChange={handleInputChange}
            multiple
          >
            {filteredAssignees.map((assignee) => (
              <option key={assignee} value={assignee}>
                {assignee}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Selected Assignees:</label>
          <div className="selected-assignees">
            {selectedAssignees.map((assignee, index) => (
              <div key={assignee} className="selected-assignee">
                <span>{assignee}</span>
                <button
                  type="button"
                  onClick={() => handleAssigneeRemove(assignee)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="stage">Status:</label>
          <select
            name="stage"
            value={ticketData.stage}
            onChange={handleInputChange}
            required
          >
            <option value="ToDo">To Do</option>
            <option value="InProgress">In Progress</option>
            <option value="Complete">Complete</option>
            <option value="OnHold">On Hold</option>
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
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </select>
        </div>
        <div className="button-container">
          <button
            type="button"
            align="left"
            id="cancel"
            onClick={() => navigate(`/my-tasks`)}
          >
            Cancel
          </button>
          <button type="submit" align="right" id="create">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateTicket;
