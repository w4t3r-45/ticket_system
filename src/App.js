import { useSelector, useDispatch } from "react-redux";
import { test } from "./redux/actions/actions";
import { Button, CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./components/login";
import UserDashboard from "./components/UserDashboard";

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
      <Router>
        <Routes>
          {/** setting default route as /login **/}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
