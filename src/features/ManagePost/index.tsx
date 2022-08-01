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
import {ManagePostForm} from '../../components/ManagePostForm';
import {useGetPostsQuery} from '../../api/generated/postsApi';
import Transition from '../../components/Transition';


export const ManagePost: FC = () => {

  const { handleToggleManagePost, isManagePostOpen, postIdToUpdate } =
    useManagePost();

  const { defaultFormValues } = useGetPostsQuery(undefined,{
    selectFromResult: ({ data }) => ({
      defaultFormValues: data?.find( post => post.id === postIdToUpdate )
    }),
  });
  console.log(defaultFormValues)

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
          </Toolbar>
        </AppBar>
        <Box display={"flex"} justifyContent={"center"} width={'80%'} mx={'auto'}>
          <ManagePostForm defaultValues={defaultFormValues}/>
        </Box>
      </Dialog>
    </div>
  );
};
export default ManagePost;
