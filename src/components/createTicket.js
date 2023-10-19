import React, { useEffect } from 'react';
import './createTicket.css';

const CreateTicket = () => {
  useEffect(() => {
    const selectElement = document.getElementById('project');
    const options = selectElement.getElementsByTagName('option');

    for (let option of options) {
      const name = option.text;
      const firstLetter = name.charAt(0);
      option.text = `${firstLetter} - ${name}`;
    }
  }, []);

  return (
    <div className="ticket-form">
      <h2>Create Ticket</h2>
      <form action="submit_ticket.java" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="endTime">End Time:</label>
            <input type="time" id="endTime" name="endTime" required />
          </div>
        </div>
        <label htmlFor="project">Project:</label>
        <select id="project" name="project" required>
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
          <option value="project3">Project 3</option>
        </select>

        <label htmlFor="assignee">Assignee:</label>
        <select id="assignee" name="assignee" required>
          <option value="assignee1">Assignee 1</option>
          <option value="assignee2">Assignee 2</option>
          <option value="assignee3">Assignee 3</option>
        </select>

        <label htmlFor="status">Status:</label>
        <select id="status" name="status" required>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
          <option value="On Hold">On Hold</option>
        </select>

        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority" required>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <div className="button-container">
          <button type="button" align="left" id="cancel">
            Cancel
          </button>
          <button type="submit" id="create">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTicket;
