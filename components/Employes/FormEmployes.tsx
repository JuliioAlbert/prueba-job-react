import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useEmploye } from "../../hooks/useEmploye";
import { DatePickerComponent, Input } from "../Forms";

export const FormEmployes = () => {
  const { initialValues, validationsSchema, onSubmit } = useEmploye();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationsSchema}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Input
            label={"Name"}
            name={"name"}
            type="text"
            placeholder="name"
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
            label={"Last_name"}
            name={"last_name"}
            type="text"
            placeholder="last_name"
            onCopy={(e: any) => {
              e.preventDefault();
              return false;
            }}
            onPaste={(e: any) => {
              e.preventDefault();
              return false;
            }}
          />
          <DatePickerComponent
            setFieldValue={setFieldValue}
            name={"birthday"}
            label={"Birthday"}
            value={values.birthday}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Agregar
          </Button>
        </Form>
      )}
    </Formik>
  );
};
