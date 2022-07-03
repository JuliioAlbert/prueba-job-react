import { Add } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmployesData } from "../../components/Employes";
import { DialogEmploye } from "../../components/Employes/DialogEmploye";
import { Layout } from "../../components/Layout";
import { AppDispatch, StoreApp } from "../../redux";
import { setOpen } from "../../redux/slices/Employes";

const Employes = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onClickAdd = () => {
    dispatch(setOpen(true));
  };

  const { user } = useSelector((state: StoreApp) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    } else {
      router.push(router.pathname);
    }
  }, [user]);

  return (
    <Layout>
      <Paper sx={{ width: "100%" }}>
        <Button variant="contained" endIcon={<Add />} onClick={onClickAdd}>
          ADD
        </Button>
        <EmployesData />
      </Paper>
      <DialogEmploye />
    </Layout>
  );
};

export default Employes;
