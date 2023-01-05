import { styled, Typography } from '@mui/material';

// styled component
export const ContentTypoResponsive = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));

export const WhiteTypoStyled = styled(Typography)({
  color: 'white',
});




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
