import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa'; // Added import statement

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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FaKey style={{ marginRight: '10px', fontSize: '150%' }} />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          fullWidth
        />
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default Login;
