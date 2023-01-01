import { styled, Typography } from '@mui/material';

export const ContentTypoResponsive = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const responsiveText = {
  xs: '14px',
  sm: '16px',
  lg: '18px',
};
