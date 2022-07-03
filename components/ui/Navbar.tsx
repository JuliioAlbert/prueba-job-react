import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { StoreApp } from "../../redux/store";
import { useSelector } from "react-redux";
import { Route } from "../../interfaces";
import { useRouter } from "next/router";
// import { toggleDrawer } from "../../redux/slices/ui";

const pages: Route[] = [
  { name: "Employes", path: "/employes" },
  { name: "Upload", path: "/upload" },
];

export const Navbar = () => {
  const { user } = useSelector((state: StoreApp) => state.auth);

  const router = useRouter();

  const onClickNav = (route: Route) => {
    router.push(route.path);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => {}}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Prueba
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {pages.map((item) => (
            <Button
              key={item.path}
              sx={{ color: "#fff" }}
              onClick={() => onClickNav(item)}
            >
              {item.name}
            </Button>
          ))}
          {!user && (
            <Button
              sx={{ color: "#fff" }}
              onClick={() => onClickNav({ name: "Login", path: "/login" })}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
