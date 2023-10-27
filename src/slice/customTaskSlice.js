import { createSlice } from '@reduxjs/toolkit';

const CustomTaskSlice = createSlice({
  name: 'customFields',
  initialState: {
    fields: [],
    formData: {},
  },
  reducers: {
    addCustomField: (state, action) => {
      state.fields.push(action.payload);
    },
    updateFieldValue: (state, action) => {
      const { fieldName, value } = action.payload;
      state.formData[fieldName] = value;
    },
  },
});

export const { addCustomField, updateFieldValue } = CustomTaskSlice.actions;
export default CustomTaskSlice.reducer;
