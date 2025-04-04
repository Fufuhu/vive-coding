import { Box, Button, TextField } from '@mui/material';
import { FaUser, FaKey } from 'react-icons/fa';

const Login = () => {
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
