import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Notification(props) {
  const notify = () => toast("Wow so easy !");
  return (
    <>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </>
  );
}
