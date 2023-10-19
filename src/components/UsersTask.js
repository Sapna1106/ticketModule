import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './tasknavbar.css'

const UsersTask = () => {
  const tasks = useSelector((state) => state.tasks.tickets);
  const [filter, setFilter] = useState('All'); 

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    } else {
      return task.status === filter; 
    }
  });

  return (
    <>
      <h1>Users Task List</h1>
      <div className='container'>
        <div className="task-navbar">
          <div className='task-navbar-left'>
            <button onClick={() => setFilter('All')}><h3>All</h3></button>
            <button onClick={() => setFilter('To Do')}><h3>To Do</h3></button>
            <button onClick={() => setFilter('Progress')}><h3>Progress</h3></button>
            <button onClick={() => setFilter('On Hold')}><h3>On Hold</h3></button>
            <button onClick={() => setFilter('Done')}><h3>Done</h3></button>
          </div>
          <div className="task-navbar-right">
            <button ><h3>Customize</h3></button>
          </div>
        </div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Ticket ID</th>
              <th>Tags</th>
              <th>Priority</th>
              <th>Project Name</th>
              <th>Created By</th>
              <th>Status</th>
              <th>Created At</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.taskName}</td>
                <td>{task.ticketID}</td>
                <td>{task.tags}</td>
                <td>{task.priority}</td>
                <td>{task.projectName}</td>
                <td>{task.createdBy}</td>
                <td>{task.status}</td>
                <td>{task.createdAt}</td>
                <td>{task.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersTask;
