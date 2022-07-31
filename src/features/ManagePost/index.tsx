import React, { FC } from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useManagePost } from "./hooks/useManagePost";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ManagePost: FC = () => {
  const { handleToggleManagePost, isManagePostOpen, postIdToUpdate } =
    useManagePost();

  const handleClose = () => {
    handleToggleManagePost();
  };
  const handleSaveAndClose = () => {
    handleToggleManagePost();
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={isManagePostOpen}
        onClose={() => handleToggleManagePost()}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {postIdToUpdate ? "Update post" : "Create New Post"}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSaveAndClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box display={"flex"} justifyContent={"center"} width={'80%'} mx={'auto'}>
          <Box component="form" p={4} noValidate autoComplete="off" width={'100%'} sx={{
            '& .MuiTextField-root': { m: 1},
          }}>
            <TextField
              required
              fullWidth
              id="post-title"
              label="Title"
              defaultValue="Hello World"
            />
            <TextField
              required
              multiline
              maxRows={5}
              fullWidth
              id="post-content"
              label="Content"
              defaultValue="Hello World"
            />
            <TextField
              required
              fullWidth
              id="img-url"
              label="Link to image"
              defaultValue=""
            />
            <TextField
              fullWidth
              id="lat"
              label="Lattitude"
              defaultValue={0}
            />
            <TextField
              fullWidth
              id="longitude"
              label="Longitude"
              defaultValue={0}
            />
          </Box>
        </Box>
      </Dialog>
    </div>
  );
};
export default ManagePost;
