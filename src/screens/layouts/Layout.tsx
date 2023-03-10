import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../../components';
import { backgroundColor } from '../../libs';

export const Layout = () => {
  return (
    <Box sx={{ backgroundColor: backgroundColor['main'], pb: 12 }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
