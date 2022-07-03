import Head from "next/head";
import { FC } from "react";

import { Box } from "@mui/material";
import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const Layout: FC<Props> = ({ title = "Prueba React", children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
