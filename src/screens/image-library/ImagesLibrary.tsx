import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/system';

import { ALL_IMAGE } from '../../libs';
import { centerDiv, WhiteTypoStyled } from '../../styles';

export const ImagesLibrary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ mt: 12 }}>
      <Box sx={{ ...centerDiv, mb: 2 }}>
        <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
          Thư viện ảnh{' '}
        </WhiteTypoStyled>
      </Box>
      <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
        {ALL_IMAGE.map((item: any, index: any) => (
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
      {/* Nội thất nhà ở */}
    </Container>
  );
};
