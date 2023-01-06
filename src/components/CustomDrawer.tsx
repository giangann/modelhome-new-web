import { Box, Drawer } from '@mui/material';

type CustomDrawerProps = {
  open: boolean;
  onClose: () => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  children: React.ReactNode;
};
export const CustomDrawer = (props: CustomDrawerProps) => {
  const { open, onClose, anchor, children } = props;
  return (
    <Box>
      <Drawer open={open} onClose={onClose} anchor={anchor}>
        {children}
      </Drawer>
    </Box>
  );
};
