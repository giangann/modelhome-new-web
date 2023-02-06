import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import AboutImage from '../../assets/images/about_image.jpg';
import { backgroundColor } from '../../libs';
import { centerDiv, responsiveText, WhiteTypoStyled } from '../../styles';

export const OurServices = () => {
  const services = {
    title: 'Các dịch vụ',
    content: [
      {
        id: 1,
        name: 'Thiết kế nội thất',
      },
      {
        id: 2,
        name: 'Thi công nội thất',
      },
      {
        id: 3,
        name: 'Thiết kế công trình',
      },
      {
        id: 4,
        name: 'Thi công công trình',
      },
      {
        id: 4,
        name: 'Công trình thực tế',
      },
    ],
  };
  return (
    <Box sx={{ py: 3, mt: 4, backgroundColor: 'white' }}>
      <Container>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Typography
            sx={{ color: backgroundColor['main'], textAlign: 'center' }}
            variant="h5"
          >
            {services.title}{' '}
          </Typography>
        </Box>
        <Grid
          sx={{ marginTop: '24px !important', marginBottom: '24px !important' }}
          container
          spacing={{ xs: 2 }}
          justifyContent={{ xs: 'unset', sm: 'space-between' }}
        >
          {services.content.map((item: any, index: any) => (
            <Box
              component="div"
              key={index}
              sx={{
                mx: 2,
                '& :hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <Paper
                component="div"
                sx={{
                  ...centerDiv,
                  backgroundColor: '#7E4528',
                  p: 4,
                }}
                elevation={4}
              >
                <WhiteTypoStyled>{item.name}</WhiteTypoStyled>
              </Paper>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
