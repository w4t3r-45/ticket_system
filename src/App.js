import { useSelector, useDispatch } from "react-redux";
import { test } from "./redux/actions/actions";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./components/login";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/adminDashboard";
import NewPassword from "./components/newPassword";
import { rallyLight } from "./themes/rallyTheme";
// configuring AWS AMPLIFY
import Amplify, { Auth } from "aws-amplify";
import { conf } from "./AWS/awsConfig";
Amplify.configure(conf);

function App() {
  const dispatch = useDispatch(); //helper to dipatch actions
  const handleClick = (event) => {
    dispatch(test());
  };
  return (
    <>
      <CssBaseline />
      {/* <Button variant="outlined" onClick={(event) => handleClick(event)}>
        Test redux
      </Button> */}
      <ThemeProvider theme={rallyLight}>
        <Router>
          <Routes>
            {/** setting default route as /login **/}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/newpwd" element={<NewPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
