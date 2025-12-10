import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/pipelineSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})

store.subscribe(() => console.log('State:', store.getState()))
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;