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
  Divider,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  styled
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { tableRowClasses } from "@mui/material/TableRow";
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
    // bgcolor: theme.palette.secondary.dark,
    bgcolor: theme.palette.secondary.light,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1)
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.grey[50],
      fontWeight: "bold"
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: theme.palette.grey[100]
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
      cursor: "pointer"
    },
    [`&.${tableRowClasses.hover}`]: {
      [`&.${tableCellClasses.body}`]: {
        backgroundColor: "red"
      }
    }
  }));

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
              <Box sx={{ pl: 2, pb: 1 }}>
                <Typography variant="subtitle1">Ait Chaabane Said</Typography>
                <Typography
                  variant="subtitle2"
                  color={theme.palette.text.secondary}
                >
                  Employee - Admin
                </Typography>
              </Box>
              <Divider />
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
      {/* cards Container */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        sx={{ mt: 4, mb: 4 }}
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
      <Divider />
      {/* Table Container */}
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          maxWidth: 1200,
          mt: 4,
          ml: "auto",
          mr: "auto",
          mb: 0
        }}
      >
        <Table
          sx={{
            maxWidth: 1200,
            margin: "auto"
          }}
          size="small"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Ticket ID</StyledTableCell>
              <StyledTableCell>Report Date</StyledTableCell>
              <StyledTableCell>Ticket Title</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Closing Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>#4826</StyledTableCell>
              <StyledTableCell>2021-06-11</StyledTableCell>
              <StyledTableCell>
                System is not respondingSystem is not respondingSystem is not
                respondingSystem is not respondingSystem is not
              </StyledTableCell>
              <StyledTableCell>Pending</StyledTableCell>
              <StyledTableCell>2021-06-12</StyledTableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>#4826</StyledTableCell>
              <StyledTableCell>2021-06-11</StyledTableCell>
              <StyledTableCell>
                System is not respondingSystem is not respondingSystem is not
                respondingSystem is not respondingSystem is not
              </StyledTableCell>
              <StyledTableCell>Pending</StyledTableCell>
              <StyledTableCell>2021-06-12</StyledTableCell>
            </TableRow>

            <StyledTableRow>
              <StyledTableCell>#4826</StyledTableCell>
              <StyledTableCell>2021-06-11</StyledTableCell>
              <StyledTableCell>
                System is not respondingSystem is not respondingSystem is not
                respondingSystem is not respondingSystem is not
              </StyledTableCell>
              <StyledTableCell>Pending</StyledTableCell>
              <StyledTableCell>2021-06-12</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
