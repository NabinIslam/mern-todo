import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AddTodo = () => {
  return (
    <Box>
      <form>
        <Box
          maxWidth={1000}
          margin="auto"
          sx={{ display: 'flex', gap: '10px' }}
        >
          <TextField
            fullWidth={true}
            label="Add Todo"
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddTodo;
