import React, { useRef } from "react";
import AppLayout from "../Components/layout/AppLayout";
import Title from "../Components/shared/Title";
import { IconButton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../Components/Styels/StyledComponents";
import { Form } from "react-router-dom";
import FileMenu from "../Components/dialogs/FileMenu";
import { sampleMessages } from "../constants/sampleData";
import MessageComponent from "../Components/shared/MessageComponent";

const user = {
  _id: "ghgjhfvjhvjv",
  name: "Samant Goswami",
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {sampleMessages.map((i) => (
          <MessageComponent key={i._id} message={i} user={ user} />
        ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack height={"100%"}
          padding={"0.4rem"}
          alignItems={"center"}
          position={"relative"}
          direction={"row"}>
          <IconButton
            sx={{
              position: "absolute",
              rotate: "30deg"

            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Type a message"/>

          <IconButton
            sx={{
              bgcolor: orange,
              color: "white",
              marginLeft :"0.4rem"
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu/>
    </>
  );
};

export default AppLayout()(Chat);
