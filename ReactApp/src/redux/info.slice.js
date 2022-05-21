import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'info',
  initialState: {
    courses: [],
    lessons: [],
  },
  reducers: {
    addCourses: (state, action) => state.courses = action.payload,
  }

})