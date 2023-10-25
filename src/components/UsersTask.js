import React, { useState, useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';
import TaskView from './taskView';
import './tasknavbar.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import {setTickets} from '../slice/taskSlice';

const UsersTask = () => {
  const tasks = useSelector((state) => state.tasks.tickets);
  const [filter, setFilter] = useState('All');
  const [selectedTask, setSelectedTask] = useState(null);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShow(true);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    } else {
      return task.stage === filter;
    }
  });

  // useEffect(() => {
  //   axios.get('http://localhost:8888/tickets')
  //     .then((response) => {
  //       dispatch(setTickets(response.data));
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data from the backend', error);
  //     });
  // }, [dispatch]);

  return (
    <>
      <div className="container">
      <h1>Users Task List</h1>
        <div className="task-navbar">
          <div className="task-navbar-left">
            <button onClick={() => setFilter('All')}>
              <h3>All</h3>
            </button>
            <button onClick={() => setFilter('To Do')}>
              <h3>To Do</h3>
            </button>
            <button onClick={() => setFilter('Progress')}>
              <h3>Progress</h3>
            </button>
            <button onClick={() => setFilter('On Hold')}>
              <h3>On Hold</h3>
            </button>
            <button onClick={() => setFilter('Done')}>
              <h3>Done</h3>
            </button>
          </div>
          <div className="task-navbar-right">
            <Link to="/custom-ticket">
                <button>
                    <h3>Customize</h3>
                </button>
            </Link>
          </div>
        </div>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Ticket ID</th>
              <th>Description</th>
              <th>End Date</th>
              <th>End Time</th>
              <th>Project</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <button onClick={() => handleTaskClick(task)}>
                    {task.taskName}
                  </button>
                </td>
                <td>{task.ticketID}</td>
                <td>{task.description}</td>
                <td>{task.endDate}</td>
                <td>{task.endTime}</td>
                <td>{task.projectIn}</td>
                <td>{task.assignee}</td>
                <td>{task.stage}</td>
                <td>{task.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTask && (
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Task Details</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <TaskView task={selectedTask} />
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default UsersTask;
