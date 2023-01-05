import { Box, useMediaQuery, useTheme } from '@mui/material';

import ImageSlide02 from '../../assets/images/slide_02.jpg';
import { backgroundColor } from '../../libs/colors';
import ImageSlide01 from '../assets/images/slide_01.jpg';
import { About } from './About';
import { ImageLibrary } from './ImageLibrary';
import { Project } from './Project';

export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ width: '100%', backgroundColor: backgroundColor['main'] }}>
      <img
        alt="slide"
        src={ImageSlide02}
        style={{ width: '100%', height: isMobile ? '40vh' : '90vh', objectFit: 'cover' }}
      />
      <About />
      <Project />
      <ImageLibrary />
    </Box>
  );
};
