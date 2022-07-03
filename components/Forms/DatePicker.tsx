import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { FC } from "react";

interface Props {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  value?: Date | string;
  name: string;
  label?: string;
}

export const DatePickerComponent: FC<Props> = ({
  label,
  name,
  value = new Date(Date.now()),
  setFieldValue,
}) => {
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={(newValue) => {
        setFieldValue(name, moment(newValue).format("YYYY/MM/DD"));
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};
