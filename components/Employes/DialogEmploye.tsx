import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreApp } from "../../redux";
import { setOpen } from "../../redux/slices/Employes";
import { FormEmployes } from "./FormEmployes";

export const DialogEmploye = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { open } = useSelector((state: StoreApp) => state.employes);

  const onClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add new Employe</DialogTitle>
      <DialogContent>
        <FormEmployes />
      </DialogContent>
    </Dialog>
  );
};
