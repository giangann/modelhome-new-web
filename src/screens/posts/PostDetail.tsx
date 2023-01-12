import { Box, Container, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  IcRoundSupervisorAccount,
  IcSharpCalendarMonth,
} from '../../components/icons/Icons';
import { LIST_POST } from '../../libs';
import { centerDiv, CustomButton, responsiveText, WhiteTypoStyled } from '../../styles';
import { PostItem } from './PostItem';

export const PostDetail = () => {
  const navigate = useNavigate();

  const post = LIST_POST[0];
  const relatedPosts = LIST_POST.slice(1, 4);

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
          {post.title}
        </WhiteTypoStyled>
      </Box>
      <Box>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" spacing={1}>
            <IcRoundSupervisorAccount color="white" fontSize={18} />
            <WhiteTypoStyled sx={{ ...responsiveText }}>{post.author}</WhiteTypoStyled>
          </Stack>
          <Stack direction="row" spacing={1}>
            <IcSharpCalendarMonth color="white" fontSize={18} />
            <WhiteTypoStyled sx={{ ...responsiveText }}>
              {post.created_at}
            </WhiteTypoStyled>
          </Stack>
        </Stack>
      </Box>
      <Box sx={{ mt: 2 }}>
        <WhiteTypoStyled sx={{ ...responsiveText, opacity: 0.8 }}>
          {post.content}
        </WhiteTypoStyled>
      </Box>

      <Box sx={{ ...centerDiv, justifyContent: 'start', mt: 1 }}>
        <CustomButton onClick={() => navigate('/posts')}>
          <WhiteTypoStyled sx={{ ...responsiveText }}>
            &lt;&lt; danh sách bài viết
          </WhiteTypoStyled>
        </CustomButton>
      </Box>

      <Box sx={{ ...centerDiv, my: 3 }}>
        <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
          Bài viết liên quan
        </WhiteTypoStyled>
      </Box>
      <Box>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          {relatedPosts.map((item: any, index: any) => (
            <PostItem key={index} {...item} isMobile={true} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
};
