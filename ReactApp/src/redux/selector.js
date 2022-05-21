import { createSelector } from "@reduxjs/toolkit"

export const useSelector = (state) => state.user;
export const userRemaningSelector = createSelector(useSelector, (user) => {
  return user
})

export const coursesSelector = createSelector((state) => state.data, (data) => data.courses);
export const lessonsSelector = createSelector((state) => state.data, (data) => data.lessons);
export const wordsSelector = createSelector((state) => state.data, (data) => data.words);
export const learnedWordsSelector = createSelector((state) => state.data, (data) => data.learnedWords);

export const buttonStateSelector = createSelector(state => state.data, data => data.buttonState);
export const countSelector = createSelector(state => state.data, data => data.count);
export const indexWordSelector = createSelector(state => state.data, data => data.indexWord);
