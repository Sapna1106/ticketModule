import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [
    { id: 1,taskName: 'Task 1',ticketID: 'T121',tags: ['Tag1', 'Tag2'],priority: 'High',projectName: 'Project A',createdBy: 'User A',status: 'To Do',createdAt: '2023-10-19',endDate: '2023-10-31',},
    { id: 2,taskName: 'Task 2',ticketID: 'T122',tags: ['Tag1', 'Tag2'],priority: 'High',projectName: 'Project A',createdBy: 'User B',status: 'On Hold',createdAt: '2023-10-19',endDate: '2023-10-31',},
    { id: 3,taskName: 'Task 3',ticketID: 'T123',tags: ['Tag1', 'Tag2'],priority: 'High',projectName: 'Project A',createdBy: 'User C',status: 'Progress',createdAt: '2023-10-19',endDate: '2023-10-31',},
    { id: 4,taskName: 'Task 4',ticketID: 'T124',tags: ['Tag1', 'Tag2'],priority: 'High',projectName: 'Project A',createdBy: 'User A',status: 'Done',createdAt: '2023-10-19',endDate: '2023-10-31',},
    { id: 5,taskName: 'Task 5',ticketID: 'T125',tags: ['Tag1', 'Tag2'],priority: 'High',projectName: 'Project A',createdBy: 'User C',status: 'To Do',createdAt: '2023-10-19',endDate: '2023-10-31',},
    
  ],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
