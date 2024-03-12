import { TryCatch } from "../middlewares/error.js";
import { ErrorHandler } from "../utils/utility.js";
import { Chat } from "../models/chat.js";
import { emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/events.js";
import { getOtherMembers } from "../lib/helper.js";

export const newGroupChat = TryCatch(async (req, res, next) => {
  const { name, members } = req.body;

  if (members.length < 2)
    return next(
      new ErrorHandler("Group chat must have at least 3 members", 400)
    );

  const allMembers = [...members, req.user];

  await Chat.create({
    name,
    creator: req.user,
    groupChat: true,
    members: allMembers,
  });

  emitEvent(req, ALERT, allMembers, `Welcome tp ${name} group`);
  emitEvent(req, REFETCH_CHATS, members);

  return res.status(201).json({
    success: true,
    message: "Group Created",
  });
});

export const getMyChats = TryCatch(async (req, res, next) => {
  const chats = await Chat.find({ members: req.user }).populate(
    "members",
    "avatar name"
  );

  const transformedChats = chats.map(({ name, _id, groupChat, members }) => {
    const otherMember = getOtherMembers(members, req.user);

    return {
      _id,
      groupChat,
      avatar: groupChat
        ? members.slice(0, 3).map((member) => member.avatar.url)
        : [otherMember.avatar.url],
      name: groupChat ? name : otherMember.name,
      members: members.reduce((prev, curr) => {
        if (curr._id.toString() !== req.user.toString()) prev.push(curr._id);

        return prev;
      }, []),
    };
  });

  res.status(200).json({
    success: true,
    chats: transformedChats,
  });
});

export const getMyGroups = TryCatch(async (req, res, next) => {
  const chats = await Chat.find({
    members: req.user,
    groupChat: true,
    creator: req.user,
  }).populate("members", "name avatar");

  const groups = chats.map(({ _id, name, groupChat, members }) => ({
    _id,
    groupChat,
    name,
    avatar: members.slice(0, 3).map((i) => i.avatar.url),
  }));

  res.status(200).json({
    success: true,
    groups,
  });
});

export const addMmebers = 
