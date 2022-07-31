import React, {MouseEventHandler} from 'react';
import { Button, Container } from "@mui/material";
import Posts from "./features/Posts";
import { PostAdd } from "@mui/icons-material";
import ManagePost from "./features/ManagePost";
import { useManagePost } from "./features/ManagePost/hooks/useManagePost";

function App() {
  const { handleToggleManagePost } = useManagePost();

  const handleAddButtonClick:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    handleToggleManagePost()
  }
  return (
    <Container>
      <Button
        variant="contained"
        onClick={handleAddButtonClick}
        startIcon={<PostAdd />}
      >
        Add New Post
      </Button>
      <Posts />
      <ManagePost />
    </Container>
  );
}

export default App;
