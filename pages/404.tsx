import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import { StoreApp } from "../redux";

const NotFound = () => {
  const { user } = useSelector((state: StoreApp) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    } else {
      router.push("/employes");
    }
  }, [user]);

  return (
    <Layout>
      <h2>Pagina 404</h2>
    </Layout>
  );
};

export default NotFound;
