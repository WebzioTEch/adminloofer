import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./OrderList')));

const OrderRoutes = [
	{ path: '/dashboard/orderlist', element: <Analytics />, auth: authRoles.admin }
];

export default OrderRoutes;
