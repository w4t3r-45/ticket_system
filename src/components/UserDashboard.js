import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Tooltip,
  Divider
} from "@mui/material";
import {
  Add,
  Notifications,
  Info,
  Person,
  Settings,
  Logout
} from "@mui/icons-material";

export default function UserDashboard(props) {
  const [ProfileAnchor, setProfileAnchor] = useState(null);
  const [NotifAnchor, setNotifAnchor] = useState(null);

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };
  const handleProfileClose = () => {
    setProfileAnchor(null);
  };
  const handleNotifClick = (event) => {
    setNotifAnchor(event.currentTarget);
  };
  const handleNotifClose = () => {
    setNotifAnchor(null);
  };

  const openProfileMenu = Boolean(ProfileAnchor);
  const openNotifMenu = Boolean(NotifAnchor);
  return (
    <>
      <AppBar elevation={0}>
        <Toolbar>
          {/** i will change font of "body" typography when i use custom theming */}
          <Typography variant="body" sx={{ flexGrow: 1 }} letterSpacing={1}>
            iReport System
          </Typography>
          <Button
            color="info"
            variant="contained"
            disableElevation
            startIcon={<Add />}
            size="small"
          >
            New Ticket
          </Button>
          {/*  notification menu */}
          <Tooltip title="Notification">
            <IconButton
              disableElevation
              disableRipple
              size="small"
              onClick={(event) => handleNotifClick(event)}
              sx={{
                ml: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent"
                }
              }}
            >
              <Notifications
                color="warning"
                sx={{ width: "25px", height: "25px" }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            open={openNotifMenu}
            onClose={handleNotifClose}
            anchorEl={NotifAnchor}
            PaperProps={{
              elevation: 0.2
            }}
            sx={{
              "& .MuiMenu-paper .MuiMenu-list": {
                padding: 0
              }
            }}
          >
            <MenuList
              sx={{
                width: 250,
                pt: "4px",
                pb: "4px",
                "&.MuiTouchRipple-root": {
                  padding: 0
                }
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Info fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2" noWrap>
                  Ticket #9756 response
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
          {/*  Profile Menu */}
          <Tooltip title="Settings">
            <IconButton
              disableElevation
              disableRipple
              size="small"
              onClick={(event) => handleProfileClick(event)}
              sx={{
                ml: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent"
                }
              }}
            >
              <Avatar sx={{ width: "25px", height: "25px" }}>S</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            open={openProfileMenu}
            onClose={handleProfileClose}
            anchorEl={ProfileAnchor}
            PaperProps={{
              elevation: 0.2
            }}
            sx={{
              "& .MuiMenu-paper .MuiMenu-list": {
                padding: 0
              }
            }}
          >
            <MenuList
              sx={{
                width: 200,
                pt: "4px",
                pb: 0,
                "&.MuiTouchRipple-root": {
                  padding: 0
                }
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2" noWrap>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2" noWrap>
                  Settings
                </Typography>
              </MenuItem>
              <Button
                fullWidth
                disableElevation
                size="small"
                variant="contained"
                endIcon={<Logout />}
                sx={{ mt: 1 }}
              >
                Log Out
              </Button>
            </MenuList>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
