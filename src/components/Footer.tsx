import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { white } from '../libs';
import {
  centerDiv,
  centerHorizontalDiv,
  responsiveText,
  WhiteTypoStyled,
} from '../styles';
import {
  IconParkTiktok,
  IcRoundPhoneInTalk,
  IcTwotoneLocationOn,
  MaterialSymbolsMarkEmailUnreadRounded,
  OpenmojiYoutube,
  PhFacebookLogoDuotone,
} from './icons/Icons';
import { BaseInput } from './input';
export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const footer = {
    title: 'Liên hệ với chúng tôi',
    content: {
      companyName: 'Công ty cổ phần kiến trúc Modehome',
      address: 'Số 4 ngõ 313 Quan Nhân, Thanh Xuân, Hà Nội',
      phoneNumber: '0987884995',
      email: 'modelhome@gmail.com',
    },
    form: {
      title: 'Tiếp nhận phản hồi',
    },
  };

  const socialMedia = [
    {
      icon: <IconParkTiktok fontSize={22} />,
      link: 'https://www.facebook.com/modelhome.vn',
    },
    {
      icon: <PhFacebookLogoDuotone fontSize={24} color="wheat" />,
      link: 'https://www.facebook.com/modelhome.vn',
    },
    {
      icon: <OpenmojiYoutube fontSize={30} />,
      link: 'https://www.facebook.com/modelhome.vn',
    },
  ];
  return (
    <Container sx={{ mt: 12 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box sx={{ ...centerDiv }}>
            <WhiteTypoStyled variant="h4" sx={{ fontWeight: 600 }}>
              Liên hệ với chúng tôi
            </WhiteTypoStyled>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ ...centerHorizontalDiv }}>
          <Box>
            <WhiteTypoStyled sx={{ mb: 2 }} variant="h6">
              Công ty cổ phần kiến trúc Modehome
            </WhiteTypoStyled>
            <Stack alignItems="flex-start">
              <Stack
                direction="row"
                alignItems={{ xs: 'unset', sm: 'center' }}
                justifyContent="flex-start"
                spacing={1.5}
              >
                <IcTwotoneLocationOn fontSize={18} color="white" />
                <WhiteTypoStyled sx={{ ...responsiveText, opacity: 0.8 }}>
                  {footer.content.address}
                </WhiteTypoStyled>
              </Stack>
              <Stack
                direction="row"
                alignItems={{ xs: 'unset', sm: 'center' }}
                justifyContent="flex-start"
                spacing={1.5}
              >
                <IcRoundPhoneInTalk fontSize={18} color="white" />
                <WhiteTypoStyled sx={{ ...responsiveText, opacity: 0.8 }}>
                  {footer.content.phoneNumber}
                </WhiteTypoStyled>
              </Stack>
              <Stack
                direction="row"
                alignItems={{ xs: 'unset', sm: 'center' }}
                justifyContent="flex-start"
                spacing={1.5}
              >
                <MaterialSymbolsMarkEmailUnreadRounded fontSize={18} color="white" />
                <WhiteTypoStyled sx={{ ...responsiveText, opacity: 0.8 }}>
                  {footer.content.email}
                </WhiteTypoStyled>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="flex-start" sx={{ ml: '-8px' }}>
              {socialMedia.map((item: any, index: any) => (
                <IconButton key={index} onClick={() => window.open(item.link, '_blank')}>
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ ...centerHorizontalDiv }}>
          <Box
            sx={{
              width: isMobile ? '100%' : '80%',
            }}
          >
            <Box mb={2}>
              <WhiteTypoStyled variant="h6">{footer.form.title}</WhiteTypoStyled>
            </Box>
            <Box sx={{ mb: 1 }}>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: white['120'],
                  borderRadius: '4px',
                  '& input': {
                    paddingTop: '12px',
                  },
                }}
                variant="filled"
                placeholder="Title"
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                sx={{
                  backgroundColor: white['120'],
                  borderRadius: '4px',
                  '& .css-qmzfsv-MuiInputBase-root-MuiFilledInput-root': {
                    paddingTop: '12px',
                  },
                  '& .MuiInputBase-multiline': {
                    paddingTop: '12px !important',
                  },
                }}
                variant="filled"
                placeholder="Content"
                multiline
                rows={4}
                //   type="textarea"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
