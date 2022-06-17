import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default createSlice({
  name: 'user',
  initialState: {
    loginState: false,
    timeout: null,
    dataReview: [],
  },
  reducers: {
    changeLoginState: (state) => {
      state.loginState = !state.loginState;
    },
    setTimeout: (date) => {
      state.timeout = date;
    },
    setDataReview: (array) => {
      state.dataReview = array;
    },


    // clearJwt: state => {
    //   state.jwt = null;
    // },
    // incrementByAmount: (state, action) => {
    //   state.jwt += action.payload
    // }
  }
})
