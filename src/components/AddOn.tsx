import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

export default function AddOn({ label }: { label: string }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  interface newMenu {
    name: string;
    price: number;
  }

  const [menu, setMenu] = React.useState<newMenu>({ name: "", price: 0 });
  console.log(menu);

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        {label}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-6 w-[350px]">
          <div className="text-2xl mb-4">Add New Menu</div>
          <div className="flex flex-col gap-4">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setMenu({ ...menu, name: e.target.value })}
            />
            <TextField
              id="outlined-basic"
              onChange={(e) =>
                setMenu({ ...menu, price: Number(e.target.value) })
              }
              label="Price"
              variant="outlined"
            />
            <div className="flex justify-end gap-4">
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button variant="contained">Create</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
