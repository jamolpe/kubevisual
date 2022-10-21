import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { reportKo, reportOk, reportWarning } from "./status-actions";

export interface StatusState {
  ko: boolean;
  ok: boolean;
  warning: boolean;
  message: string;
}

const initialState: StatusState = {
  ko: false,
  ok: false,
  warning: false,
  message: "",
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(reportOk.fulfilled, (state, action) => {
      state.ko = false;
      state.ok = true;
      state.warning = false;
      state.message = action.payload;
    });
    builder.addCase(reportKo.fulfilled, (state, action) => {
      state.ko = true;
      state.ok = false;
      state.warning = false;
      state.message = action.payload;
    });
    builder.addCase(reportWarning.fulfilled, (state, action) => {
      state.ko = true;
      state.ok = false;
      state.warning = false;
      state.message = action.payload;
    });
  },
});

export const { resetState } = statusSlice.actions;
export const statusSelector = (state: RootState) => state.status;

export default statusSlice.reducer;
