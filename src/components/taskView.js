import React, { useState, useEffect } from "react";
import { Button, Input, Select, DatePicker, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../slice/taskSlice";
import TicketService from '../services/TicketService';
import moment from "moment"; 

const { Option } = Select;

const TaskView = ({ task, closeDrawer }) => {
  // console.log(task);
  const users = useSelector((state) => state.tasks.users);
  const projects = useSelector((state) => state.tasks.projects);
  const dispatch = useDispatch();
  const [editableTask, setEditableTask] = useState({ ...task });
  const id = task.id;

  useEffect(() => {
    loadTask(id);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableTask({
      ...editableTask,
      [name]: value,
    });
  };

  const handleUpdateClick = async () => {
    TicketService.updateTicket(id,editableTask)
    .then(() => {
      dispatch(updateTask({ id: id, updatedTask: editableTask }));
      closeDrawer();
    })
    .catch ((error) => {
      console.error("Error updating Task:", error.message);
    });
  };

  const loadTask = async () => {
    TicketService.loadTicket(id)
    .then((response) => {
      setEditableTask(response.data);
    })
    .catch ((error) => {
      console.error("Error loading task data:", error.message);
    });
  };
  // console.log(editableTask);

  return (
    <Form className="task-info">
      <Form.Item label="Name">
        <Input
          name="name"
          value={task.name}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="Status">
        <Select
          name="stage"
          value={task.stage}
          onChange={(value) => handleInputChange({ target: { name: "stage", value } })}
        >
          <Select.Option value="To Do">To Do</Select.Option>
          <Select.Option value="In Progress">In Progress</Select.Option>
          <Select.Option value="Done">Done</Select.Option>
          <Select.Option value="On Hold">On Hold</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea
          name="description"
          value={task.description}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="End Date">
        <DatePicker
          value={
            editableTask.endDate ? moment(editableTask.endDate) : null
          }
          onChange={(date, dateString) => {
            setEditableTask({
              ...editableTask,
              endDate: dateString,
            });
          }}
          format="YYYY-MM-DD"
        />
      </Form.Item>
      <Form.Item label="Show Project" name="projectIn" initialValue={task.projectIn.name}>
        <Select mode="single" placeholder="Project Name" maxTagCount={3} allowClear style={{ width: '100%' }}>
          {projects.map(project => (
            <Option key={project.id} value={project.id}>
              {project.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Created By">
        <Input
          name="createdBy"
          value={editableTask.createdBy}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item label="Select Users" name="usersAssignedTo" initialValue={editableTask.usersAssignedTo.firstName}>
        <Select mode="multiple" placeholder="Assignee" maxTagCount={3} allowClear style={{ width: '100%' }}>
          {users.map(user => (
            <Option key={user.id} value={user.id}>
              {user.firstName}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Priority">
        <Select
          name="priority"
          value={editableTask.priority}
          onChange={(value) => handleInputChange({ target: { name: "priority", value } })}
        >
          <Select.Option value="HIGH">HIGH</Select.Option>
          <Select.Option value="MEDIUM">MEDIUM</Select.Option>
          <Select.Option value="LOW">LOW</Select.Option>
        </Select>
      </Form.Item>
      <Button type="primary" onClick={handleUpdateClick}>
        Update
      </Button>
    </Form>
  );
};

export default TaskView;
