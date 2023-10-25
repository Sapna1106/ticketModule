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
  // const navigate= useNavigate();

  const handleClose = () => setShow(false);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShow(true);
    // navigate(`/task-view/${task.id}`)
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    } else {
      return task.stage === filter;
    }
  });

  useEffect(() => {
    axios.get('http://localhost:8888/tickets')
      .then((response) => {
        dispatch(setTickets(response.data));
      })
      .catch((error) => {
        console.error('Error fetching data from the backend', error);
      });
  }, [dispatch]);

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
            <button onClick={() => setFilter('In Progress')}>
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
              <th>Start Date</th>
              <th>End Date</th>
              <th>Project</th>
              <th>Created By</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>
                  {/* <Link to={`/task-view/${task.id}`} onClick={() => handleTaskClick(task)}>
                    {task.name}
                  </Link> */}
                  <button onClick={() => handleTaskClick(task)}>
                    {task.name}
                  </button>
                </td>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td>{task.projectIn.name}</td>
                <td>{task.createdBy}</td>
                <td></td>
                {/* <td>{task.usersAssignedTo.firstName}</td> */}
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
          <TaskView task={selectedTask} id={selectedTask.id} closeOffCanvas={handleClose}/> 
          {/* <Link to={`/task-view/${selectedTask.id}`} /> */}
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default UsersTask;
