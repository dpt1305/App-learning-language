import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'user',
  initialState: {
    loginState: false,
  },
  reducers: {
    changeLoginState: (state) => {
      state.loginState = !state.loginState;
    },
    // clearJwt: state => {
    //   state.jwt = null;
    // },
    // incrementByAmount: (state, action) => {
    //   state.jwt += action.payload
    // }
  }
})
