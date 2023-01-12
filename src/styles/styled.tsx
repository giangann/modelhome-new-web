import { MenuItem, styled, Typography } from '@mui/material';
import { black } from '../libs';

// styled component
export const ContentTypoResponsive = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const WhiteTypoStyled = styled(Typography)({
  color: 'white',
});

export const CustomButton = styled(MenuItem)(({ theme }) => ({
  backgroundColor: `${black['20']} !important`,

  paddingLeft: theme.spacing(1.25),
  paddingRight: theme.spacing(1.25),
  paddingTop: theme.spacing(0.75),
  paddingBottom: theme.spacing(0.75),

  minHeight: 'unset',
  borderRadius: '8px',
}));

// styles css propertises
export const whiteTypo = {
  color: 'white',
};
export const responsiveText = {
  fontSize: {
    xs: '0.9rem',
    sm: '16px',
    lg: '18px',
  },
};

export const centerDiv = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const centerHorizontalDiv = {
  display: 'flex',
  justifyContent: 'center',
};
