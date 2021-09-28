import {
  TextField,
  Box,
  Typography,
  styled,
  Button,
  Paper
} from "@mui/material";
import { Adb } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
});

export default function Login(props) {
  //dispatch redux actions
  const dispatch = useDispatch();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100vw", height: "100vh", bgcolor: "#FBFBFB" }}
      >
        <Box sx={{ borderRadius: "15px", overflow: "hidden", height: "50%" }}>
          {/* //top box */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            sx={{
              width: "400px", //total width
              height: "70%",
              bgcolor: "#4475F0", //blue
              padding: "20px"
            }}
          >
            <Typography
              variant="h1"
              fontSize="1rem"
              letterSpacing={2}
              color="white"
            >
              Administrator Login
            </Typography>
            <Typography
              variant="subtitle"
              fontSize="0.9rem"
              letterSpacing={2}
              color="white"
            >
              - iReport System -
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Adb sx={{ width: "100px", height: "100px", color: "white" }} />
            </Box>
          </Box>
          {/* //bottom box (contains our form) */}

          <Box sx={{ bgcolor: "white", height: "30%", position: "relative" }}>
            <Paper
              variant="outlined"
              sx={{
                position: "absolute",
                left: "12%",
                bottom: "40px",
                bgcolor: "white",
                width: "300px",
                borderRadius: "8px"
              }}
            >
              <Form>
                <TextField
                  label="Email"
                  type="text"
                  size="small"
                  sx={{
                    mb: 1
                  }}
                  fullWidth
                />
                <TextField
                  label="Password"
                  type="password"
                  size="small"
                  sx={{
                    mb: 2
                  }}
                  fullWidth
                />
                <Button variant="outlined" size="small" sx={{ width: "100%" }}>
                  Login
                </Button>
              </Form>
            </Paper>
          </Box>
        </Box>
      </Box>
    </>
  );
}
