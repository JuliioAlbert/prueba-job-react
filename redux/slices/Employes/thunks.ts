import { Dispatch } from "@reduxjs/toolkit";
import pruebaApi from "../../../axios/pruebaApi";
import { InitialValuesEmploye } from "../../../hooks/useEmploye";
import { Data, IResponse } from "../../../interfaces";
import { StoreApp } from "../../store";
import { setEmployes, setOpen } from "./EmployesSlice";

export const getEmployes = () => {
  return async (dispatch: Dispatch, state: () => StoreApp) => {
    const response = await pruebaApi.get<IResponse<Data>>("");

    if (response.status === 200) {
      dispatch(setEmployes(response.data.data.employees));
    }
  };
};

export const setEmploye = (data: InitialValuesEmploye) => {
  return async (dispatch: Dispatch<any>, state: () => StoreApp) => {
    const response = await pruebaApi.post("", data);

    if (response.status === 200) {
      dispatch(getEmployes());
      dispatch(setOpen(false));
    }
  };
};
