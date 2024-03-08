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

export const dashboardData = {
  users: [
    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Jonh Doe",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "John Cena",
      _id: "2",
      username: "john_cena",
      friends: 34,
      groups: 6,
    },
  ],

  chats: [
    {
      name: "Desi Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        "https://www.w3schools.com/howto/img_avatar.png",
        "https://www.w3schools.com/howto/img_avatar.png",
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Jonh Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "VDesi Group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: false,
      members: [
        "https://www.w3schools.com/howto/img_avatar.png",
        "https://www.w3schools.com/howto/img_avatar.png",
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Jonh Boe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Lauda ka message hai",
      _id: "1",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman",
      },
      chatId: "chatId",
      groupsChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "asaass 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Lauda ka message hai",
      _id: "2",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaman 2",
      },
      chatId: "chatId",
      groupsChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};