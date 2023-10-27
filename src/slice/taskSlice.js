import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickets: [],
  users:[],
  projects:[],
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
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === id ? { ...ticket, ...updatedTask } : ticket
        ),
      };
    },
    setTickets: (state, action) => {
      return {
        ...state,
        tickets: action.payload,
      };
    },
    setUserList: (state,action)=>{
      state.users=action.payload;
    },
    setprojectList: (state,action)=>{
      state.projects=action.payload;
    }
  },
});

export const {
  addTicket,
  setTickets,
  updateTask,
  setUserList,
  setprojectList,
} = taskSlice.actions;
export default taskSlice.reducer;
