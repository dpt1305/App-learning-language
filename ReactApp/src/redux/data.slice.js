import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'data',
  initialState: {
    courses: [],
    lessons: []
  },
  reducers: {
    addCourses: (state, action) => {
      state.courses = action.payload},
    addLessons: (state, action) => {return state.lessons = action.payload},
  }

})