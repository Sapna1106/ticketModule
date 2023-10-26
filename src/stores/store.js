import {configureStore} from '@reduxjs/toolkit';
import taskReducer from '../slice/taskSlice';
import customReducer from '../slice/customTaskSlice';
import dataTypeReducer from '../slice/dataTypeSlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer,
        customFields: customReducer,
        dataTypes: dataTypeReducer,
    },
});

export default store;
