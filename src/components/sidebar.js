import React, {useState} from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <div className="sidebar">
      {/* <div>
        <h2>Innogent Training</h2>
      </div> */}
      <div className='sidebar-center'>
        <Link to="/dashboard" className="buttons" onClick={() => setProjectsDropdownOpen(false)}>Dashboard</Link>
        <Link to="/projects" className="buttons" onClick={() => setProjectsDropdownOpen(!isProjectsDropdownOpen)}>Projects
        {isProjectsDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/projects/all" >All Tasks</Link><br/>
          </div>
        )}
        </Link>
        <Link to="/my-tasks" className="buttons" onClick={() => setProjectsDropdownOpen(false)}>My Tasks</Link>
        <Link to="/insights" className="buttons" onClick={() => setProjectsDropdownOpen(false)}>Insights</Link>
        <Link to="/reports" className="buttons" onClick={() => setProjectsDropdownOpen(false)}>Reports</Link>
        <Link to="/more" className="buttons" onClick={() => setProjectsDropdownOpen(false)}>More</Link>
      </div>
    </div>
  );
}

export default Sidebar;

// import React, { useState } from 'react';
// import './sidebar.css';
// import { Link } from 'react-router-dom';
// import { Menu, Layout } from 'antd';
// import {
//   DashboardOutlined,
//   AppstoreAddOutlined,
//   FileTextOutlined,
//   FundProjectionScreenOutlined,
//   FileSearchOutlined,
//   MoreOutlined,
// } from '@ant-design/icons';

// const { Sider } = Layout;

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={toggleCollapse}>
//       <div className='logo'>
//         <h2>Innogent Training</h2>
//       </div>
//       <Menu theme="dark" mode="inline">
//         <Menu.Item key="1" icon={<DashboardOutlined />}>
//           <Link to="/dashboard">Dashboard</Link>
//         </Menu.Item>
//         <Menu.SubMenu key="2" icon={<AppstoreAddOutlined />} title="Projects">
//           <Menu.Item key="2.1">
//             <Link to="/projects/all">All Tasks</Link>
//           </Menu.Item>
//         </Menu.SubMenu>
//         <Menu.Item key="3" icon={<FileTextOutlined />}>
//           <Link to="/my-tasks">My Tasks</Link>
//         </Menu.Item>
//         <Menu.Item key="4" icon={<FundProjectionScreenOutlined />}>
//           <Link to="/insights">Insights</Link>
//         </Menu.Item>
//         <Menu.Item key="5" icon={<FileSearchOutlined />}>
//           <Link to="/reports">Reports</Link>
//         </Menu.Item>
//         <Menu.Item key="6" icon={<MoreOutlined />}>
//           <Link to="/more">More</Link>
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default Sidebar;
