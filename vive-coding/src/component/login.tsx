import { Box, Button, TextField, IconButton } from '@mui/material';
import { FaUser, FaKey, FaEyeSlash, FaEye } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start"  bgcolor="grey.100" p={4} width="300px">
        <Box>
          <h2>ログイン</h2>
        </Box>
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
          type={showPassword ? "text" : "password"}
          margin="normal"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </IconButton>
            ),
          }}
        />
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default Login;
