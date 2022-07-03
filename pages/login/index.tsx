import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/Forms";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { initialValues, onSubmit, validationsSchema, loading } = useAuth();

  return (
    <Layout>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginBottom: "10px" }}>
          Login
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationsSchema}
        >
          <Form noValidate>
            <Input
              label={"Email"}
              name={"email"}
              type="email"
              placeholder="Email"
              onCopy={(e: any) => {
                e.preventDefault();
                return false;
              }}
              onPaste={(e: any) => {
                e.preventDefault();
                return false;
              }}
            />
            <Input
              label={"Contraseña"}
              name={"password"}
              type="password"
              onCopy={(e: any) => {
                e.preventDefault();
                return false;
              }}
              onPaste={(e: any) => {
                e.preventDefault();
                return false;
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
          </Form>
        </Formik>
      </Box>
    </Layout>
  );
};

export default Login;
