import {
  AppBar,
  Box,
  Divider,
  Grid,
  Hidden,
  IconButton,
  MenuItem,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LogoImage from '../assets/images/logo_modelhome.jpg';
import { backgroundColor, black, boxShadowHeader, HEADER_ITEMS, white } from '../libs';
import { CustomDrawer } from './CustomDrawer';
import { IcSharpSearch, IcTwotoneMenuOpen } from './icons/Icons';
import { ListInsideDrawer } from './ListInsideDrawer';
export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const onClose = () => {
    setOpenDrawer(false);
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigate = useNavigate();

  const handleClickHeaderItems = (to: string) => {
    console.log('navigate to: ', to);
    navigate(to);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: isHomePage ? backgroundColor['main'] : black['30'],
        color: 'white',
        paddingY: { xs: '10px', sm: '18px' },
        position: 'sticky',
        boxShadow: isHomePage ? boxShadowHeader : 'none',
      }}
    >
      {/* desktop Header */}
      <Hidden smDown>
        <Grid container sx={{ position: 'relative' }}>
          <Grid item xs={3}>
            <IconButton
              sx={{ position: 'absolute', bottom: '-130px', left: '160px', p: 0 }}
              onClick={() => navigate('/')}
            >
              <img
                style={{
                  width: 150,
                  height: 'auto',
                }}
                alt="logo"
                src={LogoImage}
              />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                  light
                  variant="fullWidth"
                  sx={{
                    borderRightWidth: 'thin',
                    backgroundColor: white['120'],
                  }}
                />
              }
            >
              {HEADER_ITEMS.map((item, index) => (
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
              component="div"
              onClick={() => navigate('/')}
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
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
            <CustomMenuItem onClick={() => setOpenDrawer(true)}>
              <IcTwotoneMenuOpen fontSize={24} />
            </CustomMenuItem>
            <CustomDrawer open={openDrawer} onClose={onClose} anchor="right">
              {/* <Box sx={{ backgroundColor: 'pink', width: 200, height: 6000 }} /> */}
              <ListInsideDrawer onClose={onClose} />
            </CustomDrawer>
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
