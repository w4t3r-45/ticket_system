import {
  TextField,
  Box,
  Typography,
  styled,
  Button,
  Paper,
  CssBaseline
} from "@mui/material";
import { Adb } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
});

export default function Login(props) {
  // theme
  const theme = useTheme();
  //dispatch redux actions
  const dispatch = useDispatch();
  //yup validation setup
  const schema = yup.object({
    email: yup
      .string()
      .email("Please Enter Valid Email.")
      .required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(7) //we can add REGEX by adding .matches("regular expression" , "error message to be shown")
  });
  //react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  //submit for our form
  const submitForm = (data) => {
    console.log("our data in this form are : ", data);
  };
  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100vw", height: "100vh" }}
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
              bgcolor: theme.palette.primary.main, //blue
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
                width: "300px",
                borderRadius: "8px"
              }}
            >
              <Form onSubmit={handleSubmit((data) => submitForm(data))}>
                <TextField
                  {...register("email")}
                  error={Boolean(errors.email)}
                  helperText={Boolean(errors.email) && errors.email.message}
                  label="Email"
                  type="text"
                  size="small"
                  sx={{
                    mb: 1
                  }}
                  fullWidth
                />
                <TextField
                  {...register("password")}
                  error={Boolean(errors.password)}
                  helperText={
                    Boolean(errors.password) && errors.password.message
                  }
                  label="Password"
                  type="password"
                  size="small"
                  sx={{
                    mb: 2
                  }}
                  fullWidth
                />
                <Button
                  variant="contained"
                  disableElevation
                  size="small"
                  type="submit"
                  sx={{ width: "100%" }}
                >
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
