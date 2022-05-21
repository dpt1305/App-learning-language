import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'data',
  initialState: {
    courses: [],
    lessons: [],
    words: [],
    learnedWords: [],
    buttonState: false,
    count: 0,
    indexWord: 0,
  },
  reducers: {
    addCourses: (state, action) => {state.courses = action.payload},

    addLessons: (state, action) => {state.lessons = action.payload},
    
    addWords: (state, action) => {state.words = action.payload},
    
    addLearnedWords: (state, action) => {state.learnedWords.push(action.payload) },

    switchButtonState: (state, action) => {state.buttonState = action.payload},
    
    addCount: (state) => {state.count += 1},
    resetCount: (state) => {state.count = 0},
    
    addIndexWord: (state) => {state.indexWord += 1},
    resetIndexWord: (state) => {state.indexWord = 0},


  }

})