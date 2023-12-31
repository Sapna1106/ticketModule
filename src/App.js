import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import UsersTask from './components/UsersTask';
import Projects from './components/projects';
import CreateTicket from './components/createTicket';
import TaskView from './components/taskView';
import CustomTicket from './components/CustomTicket';
import ReestimateTicket from './components/ReestimateTicket';
import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import TicketService from './services/TicketService';
import {setUserList, setprojectList} from './slice/taskSlice';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    TicketService.fetchProjectList().then((response)=>{
      console.log(response.data)
      dispatch(setprojectList(response.data));
     }).catch((error) => {
       console.log(error);
     })
    TicketService.fetchUserList().then((response)=>{
      dispatch(setUserList(response.data));
     }).catch((error) => {
       console.log(error);
     })
  },[]);
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
          <Route  path="/task-view/:id" element={<TaskView />} />  
          <Route  path="/custom-ticket" element={<CustomTicket />} />
          <Route  path="/reestimate-ticket" element={<ReestimateTicket />} />     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
