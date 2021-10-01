import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { closeNewTicket } from "../redux/actions/actions";

export default function NewTicket(props) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.openTkt);
  const handleClose = (event) => {
    dispatch(closeNewTicket());
  };
  return (
    <>
      {console.log(props)}
      <Modal open={open} onClose={(event) => handleClose(event)}>
        <h1>hello from modal</h1>
      </Modal>
    </>
  );
}
