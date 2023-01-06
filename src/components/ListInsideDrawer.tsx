import { Box, MenuItem, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { backgroundColor, HEADER_ITEMS } from '../libs';
import { WhiteTypoStyled } from '../styles';

type ListInsideDrawerProps = {
  onClose?: () => void;
};
export const ListInsideDrawer = (props: ListInsideDrawerProps) => {
  const { onClose } = props;
  const navigate = useNavigate();

  const handleClickMenuItem = (link: string) => {
    navigate(link);
    onClose?.();
  };
  return (
    <Box
      sx={{
        width: '50vw',
        height: '100%',
        backgroundColor: backgroundColor['main'],
        py: 4,
        px: 1,
      }}
    >
      <Stack spacing={3} justifyContent="flex-start">
        {HEADER_ITEMS.map((item: any, index: any) => (
          <Stack key={index} direction="row">
            <MenuItem onClick={() => handleClickMenuItem(item.link)}>
              <WhiteTypoStyled>{item.name}</WhiteTypoStyled>
            </MenuItem>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
