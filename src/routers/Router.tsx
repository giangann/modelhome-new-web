import { Route, Routes } from 'react-router-dom';

import { Home } from '../screens/home/Home';
import { Layout } from '../screens/layouts';
import { ListPost, PostDetail } from '../screens/posts';
import { ProjectDetail } from '../screens/project-detail';
import { ListProject } from '../screens/projects-list';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<ListProject />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/posts" element={<ListPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
};
