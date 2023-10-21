import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./OrderList')));
const OrderDetails = Loadable(lazy(() => import('./OrderDetails')));

const OrderRoutes = [
	{ path: '/dashboard/orderlist', element: <Analytics />, auth: authRoles.admin },
	{ path: '/dashboard/orderdetails', element: <OrderDetails />, auth: authRoles.admin }
];

export default OrderRoutes;
