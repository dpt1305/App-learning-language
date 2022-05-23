import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

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