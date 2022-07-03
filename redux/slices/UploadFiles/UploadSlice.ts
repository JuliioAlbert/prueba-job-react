import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UploadState {
  files: File[];
}

const initialState: UploadState = {
  files: [],
};

export const UploadSlice = createSlice({
  name: "Upload",
  initialState,
  reducers: {
    setFiles: (state, action: PayloadAction<File[]>) => {
      state.files = action.payload;
    },
  },
});

export const { setFiles } = UploadSlice.actions;
