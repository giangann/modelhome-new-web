import '../projects-list/carousel.css';

import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { black } from '../../libs';
import { centerDiv, WhiteTypoStyled } from '../../styles';

type CarouselItemProps = {
  id: string | number;
  imageLink: string;
  projectName?: string;
  // navigateTo: string;
};

export const CarouselItem = (props: CarouselItemProps) => {
  const { imageLink, id, projectName } = props;

  const navigate = useNavigate();
  return (
    <Box
      component="div"
      onClick={() => navigate(`/projects/${id}`)}
      sx={{
        width: { xs: '100%', sm: 300 },
        height: 300,
        position: 'relative',
        ...centerDiv,
        cursor: 'pointer',
      }}
    >
      <img
        src={imageLink}
        alt="project"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <Box
        // className="bock-ellipsis"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 60,
          backgroundColor: black['50'],
          p: 2,
          boxSizing: 'border-box',
          ...centerDiv,
        }}
      >
        <WhiteTypoStyled
          sx={{
            // height: 60,
            // boxOrient: 'vertical',
            textAlign: 'center',
          }}
        >
          {projectName}
        </WhiteTypoStyled>
      </Box>
    </Box>
  );
};
