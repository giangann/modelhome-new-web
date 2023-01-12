import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';

import { LIST_PROJECT } from '../../libs';
import { centerDiv, WhiteTypoStyled } from '../../styles';
import { CarouselItem } from './CarouselItem';

export const ListProject = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const arrImage = [];
  const prefixPath = '/src/assets/images/';
  for (let i = 0; i < 9; i++) {
    arrImage.push(`${prefixPath}project_${i + 1}.jpg`);
  }
  const houseFurniture = arrImage.slice(0, arrImage.length / 2);
  const officeDesign = arrImage.slice(arrImage.length / 2, arrImage.length - 1);

  const houseFurnitureCarousel = LIST_PROJECT.map((item: any, index: any) => (
    <CarouselItem
      projectName={item.name}
      imageLink={item.thumbnail}
      key={index}
      id={item.id}
    />
  ));

  const officeDesignCarousel = LIST_PROJECT.map((item: any, index: any) => (
    <CarouselItem
      projectName={item.name}
      imageLink={item.thumbnail}
      key={index}
      id={item.id}
    />
  ));

  const carouselBreakpoints = {
    0: {
      items: 1,
    },
    1024: {
      items: 3,
    },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Container className="list-project" sx={{ mt: 12 }}>
      <Box sx={{ ...centerDiv, mb: 2 }}>
        <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
          Dự án của chúng tôi
        </WhiteTypoStyled>
      </Box>

      {/* Nội thất nhà ở */}
      <Box sx={{ ...centerDiv, mt: 4 }}>
        <WhiteTypoStyled variant="h6">Nội thất nhà ở</WhiteTypoStyled>
      </Box>
      <Box sx={{ width: '100%', ...centerDiv }}>
        <Box sx={{ width: { xs: '90%', sm: '100%%' }, position: 'relative' }}>
          <AliceCarousel
            autoPlay
            infinite
            autoPlayInterval={2000}
            autoWidth={isMobile ? false : true}
            items={houseFurnitureCarousel}
            responsive={carouselBreakpoints}
          />
        </Box>
      </Box>

      {/* Thiết kế văn phòng */}
      <Box sx={{ ...centerDiv, mt: 4 }}>
        <WhiteTypoStyled variant="h6">Thiết kế văn phòng</WhiteTypoStyled>
      </Box>
      <Box sx={{ width: '100%', ...centerDiv }}>
        <Box sx={{ width: { xs: '90%', sm: '100%%' }, position: 'relative' }}>
          <AliceCarousel
            autoPlay
            infinite
            autoPlayInterval={2000}
            autoWidth={isMobile ? false : true}
            items={officeDesignCarousel}
            responsive={carouselBreakpoints}
          />
        </Box>
      </Box>

      {/* <Bo */}
    </Container>
  );
};
