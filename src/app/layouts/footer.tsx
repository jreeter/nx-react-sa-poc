import { Copyright } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    minHeight: '50px',
    position: 'fixed',
    bottom: '0',
  };

  return (
    <Box style={footerStyle}>
      <Typography>
        <Copyright fontSize="small"></Copyright>Visio Lending 2024
      </Typography>
    </Box>
  );
};

export default Footer;
