import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'data',
  initialState: {
    courses: [],
    lessons: [],
    words: [],
    lessonId: null,
    buttonState: false,
    count: 0,
    indexWord: 0,
    loadingState: false,
  },
  reducers: {
    addCourses: (state, action) => {state.courses = action.payload},

    addLessons: (state, action) => {state.lessons = action.payload},
    
    addWords: (state, action) => {state.words = action.payload},
    
    setLessonId: (state, action) => {state.lessonId = action.payload },

    buttonStateFalse: (state) => {state.buttonState = false},
    buttonStateTrue: (state) => {state.buttonState = true},
    
    addCount: (state) => {state.count += 1},
    resetCount: (state) => {state.count = 0},
    
    addIndexWord: (state) => {state.indexWord = state.indexWord + 1},
    resetIndexWord: (state) => {state.indexWord = 0},

    switchLoadingState: (state) => {state.loadingState = !state.loadingState},
    resetLoadingState: (state) => {state.loadingState = false},

  }

})