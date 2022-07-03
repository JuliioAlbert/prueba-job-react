import { FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { AppDispatch } from "../redux";
import { setEmploye } from "../redux/slices/Employes/thunks";

export interface InitialValuesEmploye {
  name: string;
  last_name: string;
  birthday: string;
}

export const useEmploye = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: InitialValuesEmploye = {
    name: "",
    last_name: "",
    birthday: "",
  };

  const validationsSchema = Yup.object().shape({
    name: Yup.string().required("Obligatorio").max(30, "Máximo 30 caracteres"),
    last_name: Yup.string()
      .required("Obligatorio")
      .max(30, "Máximo 30 caracteres"),
    birthday: Yup.string().required("Obligatorio"),
  });

  const onSubmit = (
    data: InitialValuesEmploye,
    formikHelpers: FormikHelpers<InitialValuesEmploye>
  ) => {
    dispatch(setEmploye(data));
    formikHelpers.resetForm();
  };

  return {
    initialValues,
    validationsSchema,
    onSubmit,
  };
};
