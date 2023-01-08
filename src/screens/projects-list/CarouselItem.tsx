import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { centerDiv } from '../../styles';

type CarouselItemProps = {
  id: string | number;
  imageLink: string;
  // navigateTo: string;
};

export const CarouselItem = (props: CarouselItemProps) => {
  const { imageLink, id } = props;

  const navigate = useNavigate();
  return (
    <Box
      component="div"
      onClick={() => navigate(`/projects/${id}`)}
      sx={{
        width: { xs: '100%', sm: 300 },
        height: 300,
        ...centerDiv,
        cursor: 'pointer',
      }}
    >
      <img
        src={imageLink}
        alt="project"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  );
};
