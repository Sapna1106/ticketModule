import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import UsersTask from './components/UsersTask';
import Projects from './components/projects';
import CreateTicket from './components/createTicket';

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
          <Route path="/projects" element={<Projects />}/>
          <Route path="/my-tasks" element={<UsersTask />}/>
          <Route  path="/insights" >Insights</Route>
          <Route  path="/reports">Reports</Route>
          <Route  path="/more" >More</Route>
          <Route  path="/create-ticket" element={<CreateTicket />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
