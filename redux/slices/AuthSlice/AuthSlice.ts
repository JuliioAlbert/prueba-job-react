import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces";

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = AuthSlice.actions;
