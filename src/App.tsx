import React from 'react';
import {Button, Container} from '@mui/material';
import Posts from './features/Posts';

function App() {
  return (
    <Container>
      <Button variant="contained">Hello World</Button>
      <Posts/>
    </Container>
  );
}

export default App;
