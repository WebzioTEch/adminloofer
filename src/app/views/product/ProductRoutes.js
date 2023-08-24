import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./ProductSection')));
const ProductList = Loadable(lazy(() => import('./ProductList')));

const ProductRoutes = [
	{ path: '/dashboard/newproduct', element: <Analytics />, auth: authRoles.admin },
	{ path: '/dashboard/productlist', element: <ProductList />, auth: authRoles.admin }
];

export default ProductRoutes;
