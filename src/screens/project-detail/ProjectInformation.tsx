import { Box, Stack } from '@mui/material';

import { Project } from '../../libs';
import { WhiteTypoStyled } from '../../styles';

// type
export const ProjectInformation = (props: { project: Project }) => {
  const { project } = props;
  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Tên dự án: </WhiteTypoStyled>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Chủ đầu tư:</WhiteTypoStyled>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Vị trí:</WhiteTypoStyled>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Diện tích:</WhiteTypoStyled>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Năm thi công:</WhiteTypoStyled>
      </Box>
      <Box>
        <WhiteTypoStyled>{project.name}</WhiteTypoStyled>
        <WhiteTypoStyled>{project.investor}</WhiteTypoStyled>
        <WhiteTypoStyled>{project.location}</WhiteTypoStyled>
        <WhiteTypoStyled>{`${project.square}m2`}</WhiteTypoStyled>
        <WhiteTypoStyled>{project.year}</WhiteTypoStyled>
      </Box>
    </Stack>
  );
};
