import { createSelector } from "@reduxjs/toolkit"

export const useSelector = (state) => state.user

export const userRemaningSelector = createSelector(useSelector, (user) => {
  return user
})