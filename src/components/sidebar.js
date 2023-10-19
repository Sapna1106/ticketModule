import React, {useState} from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <div className="sidebar">
      <div>
        <h2>Innogent Training</h2>
      </div>
      <div>
        <Link to="/dashboard" className="button" onClick={() => setProjectsDropdownOpen(false)}>Dashboard</Link>
        <Link to="/projects" className="button" onClick={() => setProjectsDropdownOpen(!isProjectsDropdownOpen)}>Projects
        {isProjectsDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/projects/all">All Tasks</Link><br/>
          </div>
        )}
        </Link>
        <Link to="/my-tasks" className="button" onClick={() => setProjectsDropdownOpen(false)}>My Tasks</Link>
        <Link to="/insights" className="button" onClick={() => setProjectsDropdownOpen(false)}>Insights</Link>
        <Link to="/reports" className="button" onClick={() => setProjectsDropdownOpen(false)}>Reports</Link>
        <Link to="/more" className="button" onClick={() => setProjectsDropdownOpen(false)}>More</Link>
      </div>
    </div>
  );
}

export default Sidebar;
