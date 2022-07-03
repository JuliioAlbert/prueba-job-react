import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/Layout";
import { FileDropZone } from "../../components/ui/FileDropZone";
import { AppDispatch, StoreApp } from "../../redux";
import { setFiles } from "../../redux/slices/UploadFiles/UploadSlice";

const Upload = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { files } = useSelector((state: StoreApp) => state.upload);

  const uploadFiles = () => {
    dispatch(setFiles([]));
    router.push("/");
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
      <Box marginX={10} marginY={10}>
        <FileDropZone />
        <Button
          variant="contained"
          color={files.length === 0 ? "primary" : "error"}
          onClick={uploadFiles}
          disabled={files.length === 0 ? true : false}
        >
          Subir archivos
        </Button>
      </Box>
    </Layout>
  );
};

export default Upload;
