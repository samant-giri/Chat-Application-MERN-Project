import { Attachment } from "@mui/icons-material";

export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Jonh Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
    ],

    name: "Jonh Boi",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Jonh Doe",
    _id: "1",
  },
  {
    avatar: [
      "https://www.w3schools.com/howto/img_avatar.png",
    ],

    name: "Jonh Boi",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Jonh Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Jonh Boi",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attachments: [],
    content: "Lauda ka message hai",
    _id: "ghgfvjhv",
    sender: {
      _id: "user._id",
      name: "Chaman",
    },
    chatId: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "asdsad 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "ghgjhfvjhvjv",
    sender: {
      _id: "ghgjhfvjhvjv",
      name: "Chaman 2",
    },
    chatId: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

