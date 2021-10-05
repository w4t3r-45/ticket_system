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
  styled,
  ListItemText,
  Pagination
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { tableRowClasses } from "@mui/material/TableRow";
import {
  Add,
  Notifications,
  Info,
  Person,
  Settings,
  Logout,
  StackedBarChart,
  Cancel,
  ChromeReaderMode,
  BugReport,
  AllInbox,
  Cached
} from "@mui/icons-material";
//access theme object provided in our APP.JS
import { useTheme } from "@mui/material/styles";
// need to revisit notifications "not finished yet"
import Notification from "./Notification";
import NewTicket from "./NewTicket";
import Card from "./Card";
import { openNewTicket } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
// testing animation with react-reveal
import { Fade } from "react-reveal";

export default function AdminDashboard({ props }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  // new ticket form logic
  const handleNewTktClick = (event) => {
    dispatch(openNewTicket());
  };

  const [ProfileAnchor, setProfileAnchor] = useState(null);
  const [NotifAnchor, setNotifAnchor] = useState(null);

  // CUSTOM CONTEXT MENU LOGIC
  const [ctxCoord, setCtxCoord] = useState({ x: 0, y: 0 });
  const [ctxAnchor, setContextAnchor] = useState(null);
  // CUSTOM CONTEXT MENU (WILL PASS ROW ID AS A PROP TO HELP ME LATER )
  const CtxMenu = () => {
    return (
      <MenuList
        sx={{
          pt: 0,
          pb: 0,
          "&.MuiTouchRipple-root": {
            padding: 0
          }
        }}
      >
        <MenuItem>
          <ListItemText>
            <Typography variant="body2" color="text.main">
              Expand Details
            </Typography>
          </ListItemText>
          <ChromeReaderMode sx={{ color: theme.palette.primary.main, ml: 1 }} />
        </MenuItem>
        <Divider
          light
          sx={{
            "&.MuiDivider-root": {
              margin: 0
            }
          }}
        />
        <MenuItem>
          <ListItemText>
            <Typography variant="body2" color="text.main">
              Category Analytics
            </Typography>
          </ListItemText>
          <StackedBarChart sx={{ color: theme.palette.primary.main, ml: 1 }} />
        </MenuItem>
        <Divider
          light
          sx={{
            "&.MuiDivider-root": {
              margin: 0
            }
          }}
        />

        <MenuItem>
          <ListItemText>
            <Typography variant="body2" color="text.main">
              Cancel Ticket
            </Typography>
          </ListItemText>
          <Cancel sx={{ color: theme.palette.primary.main, ml: 1 }} />
        </MenuItem>
      </MenuList>
    );
  };

  // closing ctx menu

  const handleCtxClose = (event) => {
    setContextAnchor(null); //close menu
    setSelectedID(null); //unselect current row
  };
  //row selected "change bgcolor"
  const [selectedID, setSelectedID] = useState(null);
  // row click handler (ContextMenu "rightClick")
  const handleRowclick = ({ event, index }) => {
    event.preventDefault();
    setCtxCoord({ x: event.pageX, y: event.pageY });
    setContextAnchor(event.currentTarget);
    setSelectedID(index);
  };

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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[50],
      fontWeight: "bold"
    },
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: theme.palette.grey[100]
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.${tableRowClasses.root}`]: {
      cursor: "pointer",
      backgroundColor: theme.palette.grey[50]
    },
    [`&.${tableRowClasses.selected}`]: {
      backgroundColor: theme.palette.primary.light
    }
  }));

  // test purpose (render table rows)
  const dt = [0, 1, 2, 3];

  return (
    <>
      {/* {console.log("Testing if we get current theme : ", theme)} */}
      {/* css base line must be added here in order that our THEME works properly */}
      <CssBaseline />
      <AppBar elevation={3}>
        <Toolbar>
          {/** i will change font of "body" typography when i use custom theming */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textTransform: "none", color: "#000" }}
            letterSpacing={2}
          >
            iREPORT-SYSTEM
          </Typography>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            startIcon={<Add />}
            size="small"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: "#fff"
            }}
            onClick={(event) => handleNewTktClick(event)}
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
              <Badge badgeContent={25} color="error">
                <Notifications
                  sx={{
                    width: "25px",
                    height: "25px",
                    color: theme.palette.primary.main
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
              elevation: 1
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
              {/* second notif */}
              <MenuItem>
                <ListItemIcon>
                  <Info fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2" noWrap>
                  Ticket #4523 rejected
                </Typography>
              </MenuItem>
              {/* third notif */}
              <MenuItem>
                <ListItemIcon>
                  <Info fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2" noWrap>
                  Ticket #1148 Hold
                </Typography>
              </MenuItem>
              {/* fourth notif */}
              <MenuItem>
                <ListItemIcon>
                  <Info fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2" noWrap>
                  Ticket #9968 response
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
              <Avatar
                src="https://images.generated.photos/akQgTukZszRH7PYXar_nlgLB65YysXEBMfnDFFay9BI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZWRkZjFk/ZjMtODNjZC00NWU0/LTlkMzMtMThmOGM0/ZmE5NTliLmpwZw.jpg"
                sx={{ width: 35, height: 35, ml: 1 }}
              >
                S
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            open={openProfileMenu}
            onClose={handleProfileClose}
            anchorEl={ProfileAnchor}
            PaperProps={{
              elevation: 1
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
                sx={{
                  mt: 1,
                  bgcolor: theme.palette.primary.main,
                  color: "#fff"
                }}
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
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 7, mb: 4 }}
      >
        <Fade left>
          <Card
            Icon={BugReport}
            color="#FCD42B"
            title="Reported Tickets"
            value={"15"}
          />
        </Fade>
        <Fade bottom>
          <Card
            Icon={AllInbox}
            color="#291B4F"
            title="All Tickets"
            value={"28258"}
          />
        </Fade>
        <Fade right>
          <Card
            Icon={Cached}
            color="#CEEAE6"
            title="Queued Tickets"
            value={"8"}
          />
        </Fade>
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
          mb: 0,
          bgcolor: "transparent",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Table
          sx={{
            maxWidth: 1200,
            minWidth: 800,
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
            {dt.map((index, value) => (
              <StyledTableRow
                hover
                // we must pass row id to selected instead of index "next time"
                selected={selectedID === index}
                id={index}
                onContextMenu={(event) => handleRowclick({ event, index })}
              >
                <TableCell>#4826</TableCell>
                <TableCell>2021-06-11</TableCell>
                <TableCell>
                  System is not respondingSystem is not respondingSystem is not
                  respondingSystem is not respondingSystem is not
                </TableCell>
                <TableCell>Pending</TableCell>
                <TableCell>2021-06-12</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination count={10} sx={{ mt: 1 }} />
      </TableContainer>
      {/* context menu */}
      <Menu
        open={Boolean(ctxAnchor)}
        anchorReference="anchorPosition"
        anchorPosition={{ top: ctxCoord.y, left: ctxCoord.x }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        onClose={(event) => handleCtxClose(event)}
        PaperProps={{
          elevation: 1
        }}
        sx={{
          "& .MuiMenu-paper .MuiMenu-list": {
            padding: 0
          }
        }}
      >
        <CtxMenu />
      </Menu>
      {/* Notifications test */}
      <Notification />
      {/* modal form "ADD NEW TICKET" */}
      <NewTicket />
    </>
  );
}