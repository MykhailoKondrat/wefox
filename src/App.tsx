import React from 'react';
import {Button, Container} from '@mui/material';
import {useGetPostsQuery} from './api/generated/postsApi';

function App() {
  const {data} = useGetPostsQuery()
  console.log(data)
  return (
    <Container>
      <Button variant="contained">Hello World</Button>
    </Container>
  );
}

export default App;
