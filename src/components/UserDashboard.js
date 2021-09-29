import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Badge,
  Box,
  CssBaseline,
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
//access theme object provided in our APP.JS
import { useTheme } from "@mui/material/styles";

export default function UserDashboard({ props }) {
  const theme = useTheme();
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

  const boxStyle = {
    width: 300,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: theme.palette.secondary.dark,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1)
  };
  return (
    <>
      {/* {console.log("Testing if we get current theme : ", theme)} */}
      {/* css base line must be added here in order that our THEME works properly */}
      <CssBaseline />
      <AppBar elevation={0}>
        <Toolbar>
          {/** i will change font of "body" typography when i use custom theming */}
          <Typography variant="body" sx={{ flexGrow: 1 }} letterSpacing={1}>
            iReport System
          </Typography>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            startIcon={<Add />}
            size="small"
            sx={{
              bgcolor: theme.palette.primary.dark
            }}
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
              <Badge badgeContent={1000} color="error">
                <Notifications
                  sx={{
                    width: "25px",
                    height: "25px",
                    color: theme.palette.success.light
                  }}
                />
              </Badge>
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
      {/* need to include theming */}
      <Box
        sx={{
          ...theme.mixins.toolbar
        }}
      />
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <Box sx={boxStyle}>
          <Typography
            variant="h6"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Reported Tickets
          </Typography>
          <Divider flexItem />

          <Typography
            variant="h3"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            15
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography
            variant="h6"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            All Tickets
          </Typography>
          <Divider flexItem />
          <Typography
            variant="h3"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            5986
          </Typography>
        </Box>
        <Box sx={boxStyle}>
          <Typography
            variant="h6"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Queued Tickets
          </Typography>
          <Divider flexItem />
          <Typography
            variant="h3"
            color={theme.palette.primary.contrastText}
            fontWeight="bold"
            sx={{ mt: 2 }}
          >
            3
          </Typography>
        </Box>
      </Box>
    </>
  );
}
