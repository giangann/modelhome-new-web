import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { centerDiv, CustomButton, responsiveText, WhiteTypoStyled } from '../../styles';

type SeeMoreButtonProps = {
  action?: () => void;
  navigateTo?: string;
};
export const SeeMoreButton = (props: SeeMoreButtonProps) => {
  const { action, navigateTo } = props;
  const navigate = useNavigate();

  const isUseDefaultAction = typeof action !== 'function';

  const defaultAction = () => {
    navigate(navigateTo || '/');
  };
  return (
    <Box sx={{ ...centerDiv }}>
      <CustomButton onClick={isUseDefaultAction ? defaultAction : action}>
        <WhiteTypoStyled sx={{ ...responsiveText, textTransform: 'lowercase' }}>
          {' '}
          &gt;&gt; Xem tất cả{' '}
        </WhiteTypoStyled>
      </CustomButton>
    </Box>
  );
};
