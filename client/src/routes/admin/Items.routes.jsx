import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Items from '../../_Items/layouts/Items';

const RegisterItems = lazy(() => import('../../_Items/layouts/RegisterItems'));

const ItemsRoutes = () => (
  <Routes>
    <Route path="/register-items" element={<RegisterItems />} />
    <Route path="/view-items" element={<Items />} />
  </Routes>
);

export default ItemsRoutes;
