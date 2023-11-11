import {createSlice} from '@reduxjs/toolkit';

export interface ModalState {
  ScreenHeaderIsVisible: boolean;
}

const initialState: ModalState = {
  ScreenHeaderIsVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleHeaderModal: state => {
      state.ScreenHeaderIsVisible = !state.ScreenHeaderIsVisible;
    },
  },
});

export const {toggleHeaderModal} = modalSlice.actions;

export default modalSlice.reducer;
