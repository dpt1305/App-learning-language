import { createSelector } from "@reduxjs/toolkit"

export const useSelector = (state) => state.user;
export const userRemaningSelector = createSelector(useSelector, (user) => {
  return user
})

export const coursesSelector = createSelector((state) => state.data, (data) => data.courses);
export const lessonsSelector = createSelector((state) => state.data, (data) => data.lessons);

// export const courseSelector = createSelector((state) => state, (state) => state.course) ;
// export const lessonsSelector = createSelector((state) => state, (state) => state.data.lessons) ;

