import React, { FC } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Dialog,
  Typography,
  Box,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useManagePost } from "./hooks/useManagePost";
import { FormValues, ManagePostForm } from "../../components/ManagePostForm";
import {
  useGetPostsQuery,
  usePostPostsMutation,
  usePutPostsByIdMutation,
} from "../../api";
import Transition from "../../components/Transition";

export const ManagePost: FC = () => {
  const { handleToggleManagePost, isManagePostOpen, postIdToUpdate } =
    useManagePost();

  const { defaultFormValues } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      defaultFormValues: data?.find((post) => post.id === postIdToUpdate),
    }),
  });
  const [createPost] = usePostPostsMutation();
  const [updatePost] = usePutPostsByIdMutation();
  const handleClose = () => {
    handleToggleManagePost();
  };
  const handleManagePostForm = (values: FormValues) => {
    if (postIdToUpdate) {
      updatePost({ body:values,id:postIdToUpdate  });
    } else {
      createPost({ body: values });
    }
    handleClose();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={isManagePostOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              data-cy="close-overlay-button"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {postIdToUpdate ? "Update post" : "Create New Post"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          display={"flex"}
          justifyContent={"center"}
          width={"80%"}
          mx={"auto"}
        >
          <ManagePostForm
            defaultValues={defaultFormValues}
            onFormSubmit={handleManagePostForm}
          />
        </Box>
      </Dialog>
    </div>
  );
};
export default ManagePost;
