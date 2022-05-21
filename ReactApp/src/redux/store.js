import { configureStore } from '@reduxjs/toolkit'
// import courseSlice from './course.slice';
import userSlice from './user.slice';
import dataSlice from './data.slice';
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    data: dataSlice.reducer,
  }
})
export default store;