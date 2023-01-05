import {
  AppBar,
  Box,
  Grid,
  Hidden,
  IconButton,
  MenuItem,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import LogoImage from '../assets/images/logo_modelhome.jpg';
import { IcSharpSearch, IcTwotoneMenuOpen } from './icons/Icons';
export const Header = () => {
  const navigate = useNavigate();
  const headerItems = [
    {
      name: 'Về chúng tôi',
      link: '#',
    },
    {
      name: 'Các dự án',
      link: '/products',
    },
    {
      name: 'Kiến trúc',
      link: '#',
    },
    {
      name: 'Nội thất',
      link: '#',
    },
    {
      name: 'Tin tức',
      link: '#',
    },
    {
      name: 'Liên hệ',
      link: '#',
    },
  ];

  const handleClickHeaderItems = (to: string) => {
    console.log('navigate to: ', to);
    navigate(to);
  };
  return (
    <AppBar
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: 'black',
        paddingY: { xs: '10px', sm: '18px' },
      }}
    >
      {/* desktop Header */}
      <Hidden smDown>
        <Grid container>
          <Grid item xs={3}>
            <IconButton onClick={() => navigate('/')}>
              <img
                style={{
                  position: 'absolute',
                  bottom: '-115px',
                  left: '160px',
                  width: 150,
                  height: 'auto',
                }}
                alt="logo"
                src={LogoImage}
              />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" justifyContent="space-around">
              {headerItems.map((item, index) => (
                <MenuItem key={index} onClick={() => handleClickHeaderItems(item.link)}>
                  <Typography>{item.name}</Typography>
                </MenuItem>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Hidden>

      {/* mobile Header */}
      <Hidden smUp>
        <Grid container sx={{ position: 'relative' }}>
          <Grid item xs={12}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                style={{
                  width: 40,
                  height: 'auto',
                }}
                alt="logo"
                src={LogoImage}
              />
            </Box>
          </Grid>
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              right: 0,
              top: '50%',
              transform: 'translate(0, -50%)',
              paddingRight: 1,
            }}
          >
            <CustomMenuItem>
              <IcSharpSearch fontSize={24} />
            </CustomMenuItem>
            <CustomMenuItem>
              <IcTwotoneMenuOpen fontSize={24} />
            </CustomMenuItem>
          </Box>
        </Grid>
      </Hidden>
    </AppBar>
  );
};

const CustomMenuItem = styled(MenuItem)({
  paddingLeft: '10px !important',
  paddingRight: '10px !important',
});
