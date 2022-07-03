import { Paper, List } from "@mui/material";
import React from "react";
import { EntryCard } from "./EntryCard";

export const EntryList = () => {
  return (
    // Todo: El Drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        {/* Cuando quiero cambiar el estilo haciendo un drag  */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
