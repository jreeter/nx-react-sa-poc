import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import { Box } from '@mui/material';

export function MainLayout() {
  return (
    <>
      <Header />
      <Box
        style={{
          marginTop: '25px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default MainLayout;
