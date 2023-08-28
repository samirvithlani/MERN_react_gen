import { Button, IconButton } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { MyButton } from "./MyButton";

export const ButtonDemo = () => {
  return (
    <div>
      ButtonDemo
      <Button variant="text" color="primary" size="small">
        ADD
      </Button>
      <Button variant="contained" color="success" size="medium">
        ADD
      </Button>
      <Button variant="outlined" color="error">
        ADD
      </Button>
      <Button variant="contained" size="large" startIcon={<SendIcon />}>
        SEND
      </Button>
      <Button variant="contained" size="large" endIcon={<DeleteIcon />}>
        DELETE
      </Button>
      <IconButton color="primary" size="medium">
        <SendIcon />
      </IconButton>

      <MyButton size="large" color ="error" name="delete"></MyButton>
    </div>
  );
};
