import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setUser } from "../redux/slices/AuthSlice";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  interface InitalValues {
    email: string;
    password: string;
  }

  const initialValues: InitalValues = {
    email: "",
    password: "",
  };

  const validationsSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Obligatorio"),
    password: Yup.string().required("Obligatorio"),
  });

  const authSuccess = (data: InitalValues) => {
    let user = {
      id: "1",
      name: "UPrueba",
      ...data,
    };
    localStorage.setItem("auth", JSON.stringify(user));
    dispatch(setUser(user));
    router.push("/");
  };

  const onSubmit = (data: InitalValues) => {
    setLoading(true);
    setTimeout(() => {
      authSuccess(data);
      setLoading(false);
    }, 2000);
  };

  return {
    initialValues,
    validationsSchema,
    onSubmit,
    loading,
  };
};
