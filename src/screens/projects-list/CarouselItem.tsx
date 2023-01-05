import { Box } from '@mui/material';
import { centerDiv } from '../../styles';

type CarouselItemProps = {
  imageLink: string;
};

export const CarouselItem = (props: CarouselItemProps) => {
  const { imageLink } = props;
  return (
    <Box sx={{ width: { xs: '100%', sm: 300 }, height: 300, ...centerDiv }}>
      <img
        src={imageLink}
        alt="project"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};
