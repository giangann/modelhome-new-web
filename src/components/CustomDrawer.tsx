import { Box, Drawer } from '@mui/material';

type CustomDrawerProps = {
  open: boolean;
  onClose: () => void;
};
export const CustomDrawer = () => {
  return (
    <Box>
      <Drawer></Drawer>
    </Box>
  );
};
