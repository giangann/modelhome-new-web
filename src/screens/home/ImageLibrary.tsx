import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Image1 from '../../assets/images/image_library_1.jpg';
import Image2 from '../../assets/images/image_library_2.jpg';
import Image3 from '../../assets/images/image_library_3.jpg';
import { SeeMoreButton } from '../../components/button';
import { centerDiv, WhiteTypoStyled } from '../../styles';

export const ImageLibrary = () => {
  const prefixPath = '/src/assets/images/';

  const arrImage = [];
  for (let i = 0; i < 9; i++) {
    arrImage.push(`${prefixPath}image_library_${i + 1}.jpg`);
  }
  for (let i = 8; i >= 0; i--) {
    arrImage.push(`${prefixPath}image_library_${i + 1}.jpg`);
  }

  //
  const arrImageUpdate = [];
  for (let i = 0; i < 9; i++) {
    arrImageUpdate.push(`${prefixPath}image_library_${i + 1}.jpg`);
  }

  //
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box mt={4} sx={{ px: { xs: 2, sm: 4 } }}>
      <Box sx={{ ...centerDiv }}>
        <WhiteTypoStyled variant="h4"> Thư viện ảnh</WhiteTypoStyled>
      </Box>
      <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
        {arrImage.map((item: any, index: any) => (
          <ImageListItem key={index}>
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={index as string}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <SeeMoreButton navigateTo="/images-library" />
    </Box>
  );
};
