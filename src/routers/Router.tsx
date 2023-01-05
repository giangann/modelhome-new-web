import { Route, Routes } from 'react-router-dom';

import { Home } from '../screens/home/Home';
import { Layout } from '../screens/layouts';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
