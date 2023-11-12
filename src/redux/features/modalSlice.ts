import {createSlice} from '@reduxjs/toolkit';

export interface ModalState {
  ScreenHeaderIsVisible: boolean;
  VoiceCallModalIsVisible: boolean;
}

const initialState: ModalState = {
  ScreenHeaderIsVisible: false,
  VoiceCallModalIsVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleHeaderModal: state => {
      state.ScreenHeaderIsVisible = !state.ScreenHeaderIsVisible;
    },
    toggleVoiceCallModal: state => {
      state.VoiceCallModalIsVisible = !state.VoiceCallModalIsVisible;
    },
  },
});

export const {toggleHeaderModal, toggleVoiceCallModal} = modalSlice.actions;

export default modalSlice.reducer;
