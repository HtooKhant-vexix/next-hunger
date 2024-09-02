import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import { useNavigate } from "react-router-dom";
// import Login from "./Login";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store/hooks";
import { loginUser, registerUser } from "../store/slices/userSlice";
export default function Register({
  label = "",
  variant = "contained",
}: {
  label: string;
  variant: "contained" | "text" | "outlined";
}) {
  //+
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleClickOpen = () => {
    setLoginOpen(false);
    setOpen(true);
  };

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickLoginOpen = () => {
    setLoginOpen(true);
    setOpen(false);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  interface newUser {
    name: string;
    pswd: string;
  }

  const [user, setUser] = React.useState<newUser>({ name: "", pswd: "" });

  //   const navigate = useNavigate();

  console.log(user);

  // const registerUser = async () => {
  //   const response = await fetch(`http://localhost:9000/api/register`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });
  //   setLoginOpen(false);
  //   setOpen(false);
  //   navigate("/");
  // };

  return (
    <React.Fragment>
      <Button variant={variant} color="inherit" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-6 w-[350px]">
          <div className="flex justify-between mb-4">
            <div className="text-2xl text-gray-600">Register Page</div>
            <IconButton
              sx={{
                width: "35px",
                height: "35px",
              }}
              //   color="error"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col gap-4">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setUser({ ...user, pswd: e.target.value })}
              label="Password"
              variant="outlined"
            />
            <div className="flex justify-end gap-4">
              <Button
                onClick={() =>
                  dispatch(
                    registerUser({
                      ...user,
                      onSuccess: () => {
                        handleClickLoginOpen();
                      },
                    })
                  )
                }
                variant="contained"
                size="large"
                sx={{ width: "100%" }}
              >
                Register
              </Button>
            </div>
            <Divider>or</Divider>
            <p className="text-center text-gray-600">
              have any account?{" "}
              <span
                onClick={handleClickLoginOpen}
                className="text-blue-600 underline cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={loginOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-6 w-[350px]">
          <div className="flex justify-between mb-4">
            <div className="text-2xl text-gray-600">Login Page</div>
            <IconButton
              sx={{
                width: "35px",
                height: "35px",
              }}
              //   color="error"
              onClick={handleLoginClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex flex-col gap-4">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              onChange={(e) => setUser({ ...user, pswd: e.target.value })}
              label="Price"
              variant="outlined"
            />
            <div className="flex justify-end gap-4">
              <Button
                onClick={() => {
                  dispatch(
                    loginUser({
                      ...user,
                      onSuccess: () => {
                        // navigate("/");
                        handleLoginClose();
                      },
                    })
                  );
                  handleClose();
                }}
                variant="contained"
                size="large"
                sx={{ width: "100%" }}
              >
                Login
              </Button>
            </div>
            <Divider>or</Divider>
            <p className="text-center text-gray-600">
              haven't any account?{" "}
              <span
                onClick={handleClickOpen}
                className="text-blue-600 underline cursor-pointer"
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
