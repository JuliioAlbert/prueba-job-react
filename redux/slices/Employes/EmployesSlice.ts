import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../../../interfaces";

export interface EmployeState {
  employes: Employee[];
  open: boolean;
  loading: boolean;
}

const initialState: EmployeState = {
  employes: [],
  open: false,
  loading: false,
};

export const EmployeSlice = createSlice({
  name: "Employe",
  initialState,
  reducers: {
    setEmployes: (state, action: PayloadAction<Employee[]>) => {
      state.employes = [...action.payload];
    },
    setEmploye: (state, action: PayloadAction<Employee>) => {
      state.employes = [
        ...state.employes.filter((e) => e.id !== action.payload.id),
        action.payload,
      ];
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setEmployes, setEmploye, setLoading, setOpen } =
  EmployeSlice.actions;
