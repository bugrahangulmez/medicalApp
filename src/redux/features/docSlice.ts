import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface DoctorState {
  list: Doctor[];
}

const initialState: DoctorState = {
  list: [],
};

export const docSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    toggleFav: (state, {payload}: {payload: Doctor}) => {
      if (state.list.find(doc => doc.name === payload.name)) {
        state.list = state.list.filter(doc => doc.name !== payload.name);
      } else {
        state.list = [...state.list, payload];
      }
    },
  },
});

export const {toggleFav} = docSlice.actions;

export default docSlice.reducer;
