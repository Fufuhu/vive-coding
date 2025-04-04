import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { faUser as FaUserIcon, faKey as FaKeyIcon, faEyeSlash as FaEyeSlashIcon } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'grey.100',
      p: 4,
      width: '300px'
    }}>
      <Box>
        <h2>ログイン</h2>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={FaUserIcon} style={{marginRight: '8px'}}/>
        <TextField
          label="ユーザー名"
          type="text"
          margin="normal"
          fullWidth
          placeholder="ユーザー名を入力してください"
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={FaKeyIcon} style={{marginRight: '8px'}}/>
        <TextField
          label="パスワード"
          type={showPassword ? 'text' : 'password'}
          margin="normal"
          fullWidth
          placeholder="パスワードを入力してください"
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={FaEyeSlashIcon} />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Button variant="contained" color="primary" fullWidth>
        ログイン
      </Button>
    </Box>
  );
};

export default Login;
