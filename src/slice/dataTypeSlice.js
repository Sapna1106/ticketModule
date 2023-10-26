import { createSlice } from '@reduxjs/toolkit';

const dataTypeSlice = createSlice({
  name: 'dataTypes',
  initialState: ['text', 'date', 'number', 'boolean', 'single-select', 'multi-select'],
  reducers: {},
});

export default dataTypeSlice.reducer;
