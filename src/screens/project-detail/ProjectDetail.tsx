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
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LIST_PROJECT } from '../../libs';
import { centerDiv, WhiteTypoStyled } from '../../styles';
import { ProjectInformation } from './ProjectInformation';

type ProjectDetailProps = {
  name: string;
};
export const ProjectDetail = () => {
  const params = useParams();
  const project = LIST_PROJECT[parseInt(params?.id || '') - 1];

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Container sx={{ mt: 12 }}>
      <Box sx={{ ...centerDiv, mb: 2 }}>
        <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
          Chi tiết dự án{' '}
        </WhiteTypoStyled>
      </Box>
      <Box>
        <ProjectInformation project={project} />
      </Box>
      <Box>
        <ImageList variant="masonry" cols={isMobile ? 2 : 3} gap={8}>
          {arrImage.map((item: any, index: any) => (
            <ImageListItem key={index}>
              <div
                //some addtional props to avoid eslint complain
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
