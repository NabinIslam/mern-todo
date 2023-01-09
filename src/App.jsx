import { Box } from '@mui/material';
import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <Box padding={10}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Note your important todo
      </h1>
      <AddTodo />
      <Todos />
    </Box>
  );
};

export default App;
