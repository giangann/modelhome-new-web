import 'react-alice-carousel/lib/alice-carousel.css';
import '../../styles/style.css';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';

import ImageSlide02 from '../../assets/images/slide_02.jpg';
import { getImageArrayFromAssets } from '../../libs';
import { About } from './About';
import { ImageLibrary } from './ImageLibrary';
import { OurServices } from './OurServices';
import { Project } from './Project';
import { SlideCarouselItem } from './SlideCarouselItem';
export const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const arrayImage = getImageArrayFromAssets(6);
  const slideCarousel = arrayImage
    .map((item: any, index: any) => <SlideCarouselItem key={index} imageLink={item} />)
    .reverse();
  const slideCarouselResponsive = {
    0: {
      items: 1,
    },
    // 1024: {
    //   items: 3,
    // },
  };
  return (
    <Box sx={{ width: '100%' }}>
      {/* replace image by carousel */}
      {/* <img
        alt="slide"
        src={ImageSlide02}
        style={{ width: '100%', height: isMobile ? '40vh' : '90vh', objectFit: 'cover' }}
      /> */}

      {/* carousel area */}
      <Box className="slide-homepage">
        <AliceCarousel
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableButtonsControls
          items={slideCarousel}
          responsive={slideCarouselResponsive}
        />
      </Box>
      <About />
      <OurServices />
      <Project />
      <ImageLibrary />
    </Box>
  );
};
