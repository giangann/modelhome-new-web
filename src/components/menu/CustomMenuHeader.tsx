import { Menu, MenuItem, MenuListProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { WhiteTypoStyled } from '../../styles';

type CustomMenuHeaderProps = {
  open: boolean;
  onClose: () => void;
  anchorEl?: null | HTMLElement;
  listItem?: {
    link: string;
    text: string;
  }[];
} & MenuListProps;

export const CustomMenuHeader = (props: CustomMenuHeaderProps) => {
  const { open, onClose, anchorEl, listItem } = props;
  const navigate = useNavigate();
  return (
    <Menu open={open} onClose={onClose} anchorEl={anchorEl}>
      {listItem?.map((item: any, index: any) => (
        <MenuItem
          key={index}
          onClick={() => {
            navigate(item.link);
          }}
        >
          <WhiteTypoStyled>{item.text}</WhiteTypoStyled>
        </MenuItem>
      ))}
    </Menu>
  );
};
