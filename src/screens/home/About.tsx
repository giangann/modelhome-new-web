import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

import AboutImage from '../../assets/images/about_image.jpg';
import { centerDiv, responsiveText, WhiteTypoStyled } from '../../styles';

export const About = () => {
  const about = {
    title: 'Về chúng tôi',
    content:
      'Được thành lập bằng lòng đam mê, yêu nghề của tập thể các kiến trúc sư, kỹ sư giàu tài năng và kinh nghiệm trong nghề.  Chúng tôi mong muốn hiện thực hóa những ý tưởng kiến trúc độc đáo, nhằm mang lại không gian sống tiện nghi, thận thiện và an lành cho mọi người. Do đó ModelHome luôn tập trung nghiên cứu, thiết kế và thi công các công trình theo phong cách cổ điển, tân cổ điển và hiện đại. Chúng tôi  hiểu rằng để phát triển thì phải tập trung mọi nguồn lực vào việc đó. Chính vì vậy trong suốt quá trình hoạt động, chúng tôi luôn đề cao đào tạo đội ngũ nhân viên, tối ưu hóa quy trình làm việc, nghiên cứu xây dựng hệ thống quản lý mới… nhằm mục đích mang lại những công trình có chất lượng cho khách hàng trong lĩnh vực này.',
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container sx={{ mt: 4 }}>
      <Grid
        container
        spacing={{ xs: 2 }}
        justifyContent={{ xs: 'unset', sm: 'space-between' }}
      >
        <Grid item xs={12} sm={8} sx={{...centerDiv}}>
          <Box>
            <Box sx={{ mb: 1 }}>
              <WhiteTypoStyled variant="h5">{about.title} </WhiteTypoStyled>
            </Box>

            <Box>
              <WhiteTypoStyled sx={{ ...responsiveText, opacity: 0.8 }}>
                {about.content}{' '}
              </WhiteTypoStyled>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ ...centerDiv }}>
          <img
            src={AboutImage}
            alt="about"
            style={{
              width: isMobile ? '100%' : 280,
              height: isMobile ? 'auto' : 280,
              objectFit: 'cover',
              borderRadius: isMobile ? '0' : '50%',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
