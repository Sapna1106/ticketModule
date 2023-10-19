import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import UsersTask from './components/UsersTask';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div id="page-content-wrapper">
          <Navbar />
        </div>
        <Routes>

          <Route  path="/dashboard" >Home Page</Route>
          <Route path="/projects" >Projects</Route>
          <Route path="/my-tasks" element={<UsersTask />}>My Tasks</Route>
          <Route  path="/insights" >Insights</Route>
          <Route  path="/reports">Reports</Route>
          <Route  path="/more/" >More</Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
