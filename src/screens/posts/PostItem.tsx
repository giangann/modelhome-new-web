import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
  IcRoundSupervisorAccount,
  IcSharpCalendarMonth,
} from '../../components/icons/Icons';
import { responsiveText, WhiteTypoStyled } from '../../styles';

type PostItemProps = {
  thumbnail: string;
  title: string;
  author: string;
  created_at: string;
  short_content?: string;
  content?: string;
  is_newest: boolean;
  isMobile?: boolean;
  id: number;
};
export const PostItem = (props: PostItemProps) => {
  const {
    thumbnail,
    title,
    author,
    created_at,
    short_content = props.content?.slice(0, props.isMobile ? 100 : 200),
    is_newest,
    isMobile,
    id,
  } = props;
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      onClick={() => navigate(`/posts/${id}`)}
      sx={{
        backgroundColor: 'white',
        p: 2,
        borderRadius: 1,
        height: { xs: 'fit-content', md: '100%' },
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
    >
      <img
        src={thumbnail}
        style={{
          width: '100%',
          minHeight: 'max-content',
          height: '70%',
          objectFit: 'cover',
          marginBottom: 16,
        }}
        alt="blog-post"
      />
      <Typography variant="h6">{title}</Typography>
      {/* <Stack di */}
      <Stack direction="row" spacing={3}>
        <Stack direction="row" spacing={1}>
          <IcRoundSupervisorAccount color="black" fontSize={18} />
          <Typography sx={{ ...responsiveText }}>{author}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <IcSharpCalendarMonth color="black" fontSize={18} />
          <Typography sx={{ ...responsiveText }}>{created_at}</Typography>
        </Stack>
      </Stack>

      {is_newest ? (
        <>
          <Typography>{short_content}</Typography>
          <Button sx={{ mt: 2 }} variant="contained">
            <Typography>Chi tiết</Typography>
          </Button>
        </>
      ) : undefined}
    </Box>
  );
};
