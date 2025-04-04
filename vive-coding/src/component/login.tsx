import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start"  bgcolor="grey.100" p={4} width="300px">
      <TextField
        label="Username"
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default Login;
