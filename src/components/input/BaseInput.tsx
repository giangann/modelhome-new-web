import { Input, InputBase } from '@mui/material';

export const BaseInput = () => {
  return <Input placeholder="Title" color="primary" type="text" multiline maxRows={3} />;
};
