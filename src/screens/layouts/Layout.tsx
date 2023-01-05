import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
