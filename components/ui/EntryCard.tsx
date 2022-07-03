import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            Esto es la descripcion
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", paddingRight: 2 }}
        >
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            hace 30 min
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
