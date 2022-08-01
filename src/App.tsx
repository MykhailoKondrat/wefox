import React, { MouseEventHandler } from "react";
import { Box, Button, Container } from "@mui/material";
import Posts from "./features/Posts";
import { PostAdd } from "@mui/icons-material";
import ManagePost from "./features/ManagePost";
import { useManagePost } from "./features/ManagePost/hooks/useManagePost";

function App() {
  const { handleToggleManagePost } = useManagePost();

  const handleAddButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleToggleManagePost();
  };
  return (
    <Container>
      <Button
        data-cy="add-post-button"
        variant="contained"
        onClick={handleAddButtonClick}
        startIcon={<PostAdd />}
      >
        Add New Post
      </Button>
      <Box mt={2}>
        <Posts />
        <ManagePost />
      </Box>
    </Container>
  );
}

export default App;
