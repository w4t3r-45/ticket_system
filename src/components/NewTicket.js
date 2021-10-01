import { useState } from "react";
import {
  Modal,
  Box,
  Paper,
  Typography,
  styled,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Divider
} from "@mui/material";
import { Close, ConfirmationNumber } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { closeNewTicket } from "../redux/actions/actions";
import HeadShake from "react-reveal/HeadShake";
import Dropzone from "./dropzone";

export default function NewTicket(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.openTkt);
  const handleClose = (event) => {
    dispatch(closeNewTicket());
  };

  // const Form = styled("form")(({ theme }) => ({
  //   padding: 2
  // }));

  const [field, setField] = useState("");
  const [importance, setImportance] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "importance":
        setImportance(event.target.value);
        break;
      case "field":
        setField(event.target.value);
        break;
      default:
        console.log("no one reached");
        return;
    }
  };

  return (
    <>
      {console.log(props)}
      <Modal
        component={Box}
        display="flex"
        justifyContent="center"
        alignItems="center"
        open={open}
        onClose={(event) => handleClose(event)}
      >
        <HeadShake>
          <Box component={Paper} elevation={1} sx={{ width: 450 }}>
            <form>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  height: 50,
                  bgcolor: theme.palette.primary.main,
                  color: "#fff",
                  pl: 2,
                  pr: 2,
                  mb: 3
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h4" fontSize="1.4rem" mr={1}>
                    New Ticket
                  </Typography>
                  <ConfirmationNumber />
                </Box>
                <Close
                  cursor="pointer"
                  onClick={(event) => handleClose(event)}
                />
              </Box>
              <Box sx={{ pl: 2, pt: 1, pb: 1, pr: 2 }}>
                <TextField
                  size="small"
                  sx={{ mb: 2 }}
                  fullWidth
                  label="Ticket Title"
                  key="x1s3"
                />

                <FormControl size="small" sx={{ mb: 2 }} fullWidth>
                  <InputLabel id="field-select-label">Ticket Field</InputLabel>
                  <Select
                    labelId="field-select-label"
                    id="field-select"
                    name="field"
                    value={field}
                    label="Ticket Field"
                    onChange={(event) => handleChange(event)}
                  >
                    <MenuItem value={"IT"}>IT </MenuItem>
                    <MenuItem value={"SYS"}>System</MenuItem>
                    <MenuItem value={"HR"}>Human Resources</MenuItem>
                    <MenuItem value={"TS"}>Technical Support</MenuItem>
                    <MenuItem value={"TLNT"}>Talents</MenuItem>
                  </Select>
                </FormControl>

                <FormControl size="small" sx={{ mb: 2 }} fullWidth>
                  <InputLabel id="importance-select-label">
                    Level of importance
                  </InputLabel>
                  <Select
                    labelId="importance-select-label"
                    id="importance-select"
                    value={importance}
                    name="importance"
                    label="Level of importance"
                    onChange={(event) => handleChange(event)}
                  >
                    <MenuItem value={"SP"}>Super Urgent </MenuItem>
                    <MenuItem value={"HG"}>High </MenuItem>
                    <MenuItem value={"MD"}>Medium</MenuItem>
                    <MenuItem value={"LW"}>Low</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-input": {
                      "&::-webkit-scrollbar": {
                        width: 7
                      },
                      "&::-webkit-scrollbar-track": {
                        backgroundColor: "rgba(0,0,0,0.1)",
                        borderRadius: "100px"
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,0.25)",
                        borderRadius: "100px"
                      }
                    },
                    mb: 1
                  }}
                  fullWidth
                  multiline
                  maxRows={5}
                  label="Description"
                  key="x12asasaf3"
                />
                <Dropzone />
                <Divider>Please Be Sure Of Your Entered Informations</Divider>
                <Button
                  variant="outlined"
                  type="submit"
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  Validate Ticket
                </Button>
              </Box>
            </form>
          </Box>
        </HeadShake>
      </Modal>
    </>
  );
}
