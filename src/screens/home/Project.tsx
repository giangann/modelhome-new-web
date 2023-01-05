import { Box, Grid } from '@mui/material';
import { black } from '../../libs';
import { importAll } from '../../libs/functions';
import { centerDiv, responsiveText, WhiteTypoStyled } from '../../styles';

// const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export const Project = () => {
  const prefixPath = '/src/assets/images/';
  const imageTitle = [
    'Nội thất căn hộ The Park Home',
    'Nhà anh Chính - Long Biên',
    'Nội thất tầng 7 nhà anh Tuấn 76 Vũ Trọng Phụng, Hà nội',
    'Nhà anh Chính - Long Biên',
    'Chị Thủy Bea Sky - Hoàng Mai',
    'Nhà anh Chính - Long Biên',
    'Nội thất căn hộ The Park Home',
    'Nhà anh Chính - Long Biên',
    'Chị Thủy Bea Sky - Hoàng Mai',
  ];
  let arrImage = [];
  for (let i = 0; i < 9; i++) {
    arrImage.push(`${prefixPath}project_${i + 1}.jpg`);
  }

  console.log('arrImage', arrImage);

  return (
    <Box sx={{ mt: 6 }}>
      <WhiteTypoStyled variant="h3" sx={{ width: '100%', textAlign: 'center' }}>
        Các dự án
      </WhiteTypoStyled>
      <Grid container spacing={{ xs: 2, sm: 4 }} mt={4} p={{ xs: 2, sm: 4 }}>
        {arrImage.map((item: any, index: any) => (
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                cursor: 'pointer',
              }}
            >
              <img
                src={item}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: black['120'],
                  paddingY: { xs: 1, sm: 2 },
                  height: '15%',
                  ...centerDiv,
                }}
              >
                <WhiteTypoStyled
                  sx={{
                    whiteSpace: 'nowrap',

                    ...responsiveText,
                    textAlign: 'center',
                    '-webkit-line-clamp': '2',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    ' -webkit-box-orient': 'vertical',
                    // display: '-webkit-flex',
                  }}
                >
                  {imageTitle[index]}{' '}
                </WhiteTypoStyled>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
