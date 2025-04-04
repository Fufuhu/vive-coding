import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { FaUser } from 'react-icons/fa';

const Login = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start"  bgcolor="grey.100" p={4} width="300px">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FaUser style={{ marginRight: '10px', fontSize: '150%' }}/>
        <TextField
          label="Username"
          type="text"
          margin="normal"
          fullWidth
        />
      </Box>
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
