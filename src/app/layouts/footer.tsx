import { Box } from '@mui/material';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '0',
  };

  return (
    <Box style={footerStyle}>
      <Box
        style={{
          width: '100%',
          height: '100px',
          display: 'flex',
          justifyContent: 'left',
          backgroundColor: 'white',
          padding: '5px',
          borderRadius: '25px',
          maxHeight: '50px',
        }}
      >
        Footer
      </Box>
    </Box>
  );
};

export default Footer;
