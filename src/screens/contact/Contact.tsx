import { Box, Container, Grid, Stack, Typography } from '@mui/material';

import { IcTwotoneLocationOn } from '../../components/icons/Icons';
import { centerDiv, responsiveText, WhiteTypoStyled } from '../../styles';

export const Contact = () => {
  return (
    <Container sx={{ mt: 12 }}>
      <Grid container sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <WhiteTypoStyled variant="h6" sx={{ fontWeight: 600 }}>
            Modelhome - Hiện đại và sang trọng
          </WhiteTypoStyled>
          <Stack
            direction="row"
            alignItems={{ xs: 'unset', sm: 'start' }}
            justifyContent="flex-start"
            spacing={1.5}
            // sx={{ flexWrap: 'wrap' }}
          >
            <IcTwotoneLocationOn fontSize={24} color="white" />
            <WhiteTypoStyled sx={{ ...responsiveText }}>
              {/* {' '} */}
              Địa chỉ:{' '}
              <Typography component="span" sx={{ ...responsiveText, opacity: 0.8 }}>
                Chung cư IMPERIA GARDEN số 203 Nguyễn Huy Tưởng, Phường Thanh Xuân Trung,
                Quận Thanh Xuân, Hà Nội
              </Typography>{' '}
            </WhiteTypoStyled>
          </Stack>

          <Stack
            direction="row"
            alignItems={{ xs: 'unset', sm: 'start' }}
            justifyContent="flex-start"
            spacing={1.5}
            // sx={{ flexWrap: 'wrap' }}
          >
            <IcTwotoneLocationOn fontSize={14} color="white" />
            <WhiteTypoStyled sx={{ ...responsiveText }}>
              {/* {' '} */}
              Hotline:{' '}
              <Typography component="span" sx={{ ...responsiveText, opacity: 0.8 }}>
                0987884995
              </Typography>{' '}
            </WhiteTypoStyled>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* google map area */}
          <Box>
            <iframe
              title="Modelhome"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8390106670663!2d105.80755751549857!3d20.999089486014494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9768cf82d5%3A0xc4ea37bb30147bab!2zMzEzIFAuIFF1YW4gTmjDom4sIFRoYW5oIFh1w6JuIFRydW5nLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1673236787322!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 4 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{' '}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
