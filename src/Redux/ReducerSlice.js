import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShowModal: false, // Modal Visibality
  ModalData: { Trade: null, Price: null },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ToggleModal: (state, action) => {
      state.ShowModal = action.payload;
    },
    YesModel: (state, action) => {
      state.ModalData = { Trade: "YES", Price: action.payload };
      state.ShowModal = true;
    },
    NoModel: (state, action) => {
      state.ModalData = { Trade: "NO", Price: action.payload };
      state.ShowModal = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ToggleModal, YesModel, NoModel } = counterSlice.actions;

export default counterSlice.reducer;
