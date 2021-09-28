import { useSelector, useDispatch } from "react-redux";
import { test } from "./redux/actions/actions";
import { Button } from "@mui/material";

function App() {
  const dispatch = useDispatch(); //helper to dipatch actions
  const handleClick = (event) => {
    dispatch(test());
  };
  return (
    <>
      <Button variant="outlined" onClick={(event) => handleClick(event)}>
        Test redux
      </Button>
    </>
  );
}

export default App;
