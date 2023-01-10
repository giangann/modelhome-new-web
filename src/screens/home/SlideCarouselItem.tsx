import { Box, useMediaQuery, useTheme } from '@mui/material';

type SlideCarouselItemProps = {
  imageLink: string;
};
export const SlideCarouselItem = (props: SlideCarouselItemProps) => {
  const { imageLink } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box>
      <img
        alt="slide"
        src={imageLink}
        style={{
          // marginLeft: '-10px',
          width: '100%',
          height: isMobile ? '40vh' : '90vh',
          objectFit: 'cover',
          boxSizing: 'content-box',
        }}
      />
    </Box>
  );
};
