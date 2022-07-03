// import {
//   Box,
//   Divider,
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
// } from "@mui/material";
// import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, StoreApp } from "../../redux/store";

// const menuItems: string[] = [
//   "Inbox",
//   "Starred",
//   "SendEmail",
//   "Drafts",
//   "Trash",
// ];

// export const Sidebar = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   const { drawer } = useSelector((state: StoreApp) => state.ui);

//   const onClose = () => {
//     dispatch(toggleDrawer());
//   };

//   return (
//     <Drawer anchor="left" open={drawer} onClose={onClose}>
//       <Box sx={{ width: 250 }}>
//         <Box sx={{ padding: "5px 10px" }}>
//           <Typography variant="h4">Menu</Typography>
//         </Box>
//         <List>
//           {menuItems.map((text, i) => (
//             <ListItemButton key={text}>
//               <ListItemIcon>
//                 {i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           ))}
//         </List>

//         <Divider />

//         <List>
//           {menuItems.map((text, i) => (
//             <ListItemButton key={text}>
//               <ListItemIcon>
//                 {i % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           ))}
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

import React from "react";

export const Sidebar = () => {
  return <div>Sidebar</div>;
};
