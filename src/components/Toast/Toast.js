import { toast } from "react-toastify";

export default function Toast(message, typeOfToast) {
  toast[typeOfToast](message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
