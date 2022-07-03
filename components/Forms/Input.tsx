import { Box, TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import { FC } from "react";

interface Props {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
  [x: string]: any;
}
export const Input: FC<Props> = ({ label, className, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}
    >
      <TextField
        {...field}
        {...props}
        error={meta.touched && meta.error ? true : false}
        label={label}
        fullWidth
        placeholder={props.placeholder}
      />

      <ErrorMessage
        name={props.name}
        component="span"
        className="error-input"
      />
    </Box>
  );
};
