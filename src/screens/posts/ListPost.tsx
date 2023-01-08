import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import { LIST_POST } from '../../libs';
import { centerDiv, WhiteTypoStyled } from '../../styles';
import { PostItem } from './PostItem';

export const ListPost = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const listPostItem = LIST_POST.map((item: any, index: any) => {
    return <PostItem {...item} isMobile={isMobile} key={index} />;
  });

  return (
    <Container sx={{ mt: 12 }}>
      <Box sx={{ ...centerDiv, mb: 2 }}>
        <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
          Danh mục tin tức
        </WhiteTypoStyled>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          {listPostItem[0]}
        </Grid>
        <Grid item container xs={12} sm={5} spacing={2}>
          <Grid item xs={12}>
            {listPostItem[1]}
          </Grid>
          <Grid item xs={12}>
            {listPostItem[2]}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          {listPostItem[3]}
        </Grid>
        <Grid item xs={12} sm={4}>
          {listPostItem[4]}
        </Grid>
        <Grid item xs={12} sm={4}>
          {listPostItem[5]}
        </Grid>
      </Grid>
    </Container>
  );
};
