import { createSlice } from "@reduxjs/toolkit";
export interface State {
  isLoading: boolean;
  sidebarState: boolean;
  buttonbarState: boolean;
}
const initialState: State = {
  isLoading: false,
  sidebarState: false,
  buttonbarState: false,
};
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    toggleSidebar: (state,action) => {
      state.sidebarState = action.payload;
    },
    toggleButtonBar: (state, action) => {
      state.buttonbarState = action.payload;
    },
  },
});
export const { toggleLoading, toggleSidebar, toggleButtonBar } =
  globalSlice.actions;
export default globalSlice.reducer;