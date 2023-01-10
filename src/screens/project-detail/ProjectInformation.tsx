import { Box, Grid, Stack } from '@mui/material';

import { Project } from '../../libs';
import { WhiteTypoStyled } from '../../styles';

export const ProjectInformation = (props: { project: Project }) => {
  const { project } = props;

  const grid = {
    xs: 4,
    sm: 2,
    md: 2,
    lg: 1.5,
  };

  const restGrid = {
    xs: 12 - grid.xs,
    sm: 12 - grid.sm,
    md: 12 - grid.md,
    lg: 12 - grid.lg,
  };
  return (
    <Grid container>
      <Grid item {...grid}>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Tên dự án: </WhiteTypoStyled>
      </Grid>
      <Grid item {...restGrid}>
        <WhiteTypoStyled>{project.name}</WhiteTypoStyled>
      </Grid>

      <Grid item {...grid}>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Chủ đầu tư:</WhiteTypoStyled>
      </Grid>
      <Grid item {...restGrid}>
        <WhiteTypoStyled>{project.investor}</WhiteTypoStyled>{' '}
      </Grid>

      <Grid item {...grid}>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Vị trí:</WhiteTypoStyled>{' '}
      </Grid>
      <Grid item {...restGrid}>
        <WhiteTypoStyled>{project.location}</WhiteTypoStyled>{' '}
      </Grid>

      <Grid item {...grid}>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Diện tích:</WhiteTypoStyled>{' '}
      </Grid>
      <Grid item {...restGrid}>
        <WhiteTypoStyled>{`${project.square}m2`}</WhiteTypoStyled>{' '}
      </Grid>

      <Grid item {...grid}>
        <WhiteTypoStyled sx={{ fontWeight: 600 }}>Năm thi công:</WhiteTypoStyled>{' '}
      </Grid>
      <Grid item {...restGrid}>
        <WhiteTypoStyled>{project.year}</WhiteTypoStyled>{' '}
      </Grid>
    </Grid>
  );
};
