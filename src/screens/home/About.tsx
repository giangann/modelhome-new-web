import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import AboutImage from '../../assets/images/about_image.jpg';
import { backgroundColor } from '../../libs/colors';
import { centerDiv, responsiveText, WhiteTypoStyled } from '../../styles';

export const About = () => {
  const about = {
    title: 'Về chúng tôi',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas augue neque, pulvinar eu consequat eget, dapibus ac erat. Nunc dapibus, dui eget aliquet congue, risus eros vestibulum elit, eget rutrum nulla dui at odio. Integer dapibus et neque id pulvinar. Curabitur scelerisque ex at volutpat ultricies. Phasellus ac est ut orci porttitor volutpat. Mauris auctor nisi a lectus consectetur, feugiat fermentum augue finibus. Fusce eget nibh velit.',
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container sx={{ mt: 4 }}>
      <Grid
        container
        spacing={{ xs: 2 }}
        justifyContent={{ xs: 'unset', sm: 'space-between' }}
      >
        <Grid item xs={12} sm={6}>
          <Box sx={{ mb: 1 }}>
            <WhiteTypoStyled variant="h5">{about.title} </WhiteTypoStyled>
          </Box>

          <Box>
            <WhiteTypoStyled sx={{ ...responsiveText, opacity: 0.8 }}>
              {about.content}{' '}
            </WhiteTypoStyled>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ ...centerDiv }}>
          <img
            src={AboutImage}
            alt="about"
            style={{
              width: isMobile ? '100%' : '50%',
              height: isMobile ? 'auto' : 240,
              objectFit: 'cover',
              borderRadius: isMobile ? '0' : '50%',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
