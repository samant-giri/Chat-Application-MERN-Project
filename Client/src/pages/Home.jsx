import React from "react";
import AppLayout from "../Components/layout/AppLayout";
import { Stack, Typography } from "@mui/material";
import { Chat } from "@mui/icons-material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (
    <Stack
      width={"100%"}
      height={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={grayColor}
    >
      <Chat
        sx={{
          height: 100,
          width: 100,
          color: "white",
          marginBottom: 2
          
        }}
      
      ></Chat>
      <Typography color={"white"} fontWeight={"500"} variant="h4">
        Select a friend to start chat...
      </Typography>
    </Stack>
  );
};

export default AppLayout()(Home);
