import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const RegisterItems = lazy(() => import('../../_Items/layouts/RegisterItems'));

const ItemsRoutes = () => (
  <Routes>
    <Route path="/register-items" element={<RegisterItems />} />
  </Routes>
);

export default ItemsRoutes;
