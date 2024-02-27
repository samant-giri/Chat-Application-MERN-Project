import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { orange } from "../../constants/color";
import {
  Add as AddIcon,
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const [isMobile, setIsMobile] = useState(false);
const [isSerach, setIsSearch] = useState(false);
const [isNewGroup, setIsNewGroup] = useState(false);
const [isNotification, setIsNotification] = useState(false);

const Header = () => {
  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const navigateToGroup = () => {
    setIsNotification((prev) => !prev);
  };

  const logoutHandler = () => {
    navigate("/groups");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography sx={{ display: { xs: "none", sm: "block" } }}>
              Chattu
            </Typography>

            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon></MenuIcon>
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                title="Search"
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <IconBtn
                title="New Group"
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title="Manage Groups"
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />
              <IconBtn
                title="Logout"
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const IconBtn = ({ title, icon, onclick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onclick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
