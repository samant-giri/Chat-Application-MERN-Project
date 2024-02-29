import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import React, { memo } from 'react';
import { sampleNotifications } from '../../constants/sampleData';

const Notifications = () => {

  const friendRequestHanlder = ({_id, accept}) => {

  }

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({sender, _id}) => (
            <NotificationItem sender={sender} _id={ _id} handler={friendRequestHanlder} key={_id} ></NotificationItem>
        ))
        ): (
          <Typography textAlign={"center"}>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  )
}

const NotificationItem = memo(({sender, _id, handler}) => {

  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={ avatar} />

        <Typography
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request`}
        </Typography>

        <Stack direction={{xs : "column", sm : "row"}}>
          <Button onClick={() => handler({_id, accept : true})}>Accept</Button>
          <Button color='error' onClick={() => handler({_id, accept : false})}>Accept</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
})

export default Notifications