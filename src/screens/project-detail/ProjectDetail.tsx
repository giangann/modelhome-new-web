import {
  Box,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { centerDiv, WhiteTypoStyled } from '../../styles';

type ProjectDetailProps = {
  name: string;
};
export const ProjectDetail = () => {
  const prefixPath = '/src/assets/images/';
  const arrImage = [];
  for (let i = 0; i < 9; i++) {
    arrImage.push(`${prefixPath}image_library_${i + 1}.jpg`);
  }

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const openFullscreen = (index: number) => {
    document.getElementsByClassName('image')[index]?.requestFullscreen();
  };

  return (
    <Container sx={{ mt: 12 }}>
      <Box sx={{ ...centerDiv, mb: 2 }}>
        <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
          Chi tiết dự án{' '}
        </WhiteTypoStyled>
      </Box>
      <Box>
        <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
          {arrImage.map((item: any, index: any) => (
            <ImageListItem key={index}>
              <div
                role="button"
                tabIndex={index}
                onKeyDown={() => openFullscreen(parseInt(index))}
                onClick={() => {
                  openFullscreen(parseInt(index));
                }}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className="image"
                  style={{ maxWidth: '100%' }}
                  src={`${item}?w=248&fit=crop&auto=format`}
                  srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={index as string}
                  loading="lazy"
                />
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};