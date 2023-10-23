import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [
    {taskName: 'Task 1',ticketID: 'T121',description: 'This is Task 1',endDate: '2023-10-31',endTime: '12:00 PM',projectIn: 'Project A',assignee: 'User A',stage: 'To Do',priority: 'High',},
    {taskName: 'Task 2',ticketID: 'T122',description: 'This is Task 2',endDate: '2023-10-31',endTime: '12:00 PM',projectIn: 'Project B',assignee: 'User B',stage: 'Done',priority: 'High',},
    {taskName: 'Task 3',ticketID: 'T123',description: 'This is Task 3',endDate: '2023-10-31',endTime: '12:00 PM',projectIn: 'Project A',assignee: 'User C',stage: 'Progress',priority: 'High',},
    {taskName: 'Task 4',ticketID: 'T124',description: 'This is Task 4',endDate: '2023-10-31',endTime: '12:00 PM',projectIn: 'Project B',assignee: 'User B',stage: 'On Hold',priority: 'High',},
    {taskName: 'Task 5',ticketID: 'T125',description: 'This is Task 5',endDate: '2023-10-31',endTime: '12:00 PM',projectIn: 'Project A',assignee: 'User A',stage: 'Done',priority: 'Low',},
    {taskName: 'Task 6',ticketID: 'T126',description: 'This is Task 6',endDate: '2023-10-31',endTime: '12:00 PM',projectIn: 'Project A',assignee: 'User A',stage: 'To Do',priority: 'High',},
    
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTicket: (state, action) => {
      console.log(action);
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
      };
    },
    setTickets: (state, action) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },
  
  },
});

export const {
  addTicket,
  setTickets,
} = taskSlice.actions;
export default taskSlice.reducer;
