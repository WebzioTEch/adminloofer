import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./CustomerSection')));
const AddCustomer = Loadable(lazy(() => import('./AddCustomer')));

const CustomerRoutes = [
	{ path: '/dashboard/customerlist', element: <Analytics />, auth: authRoles.admin },
	{ path: '/dashboard/addcustomer', element: <AddCustomer />, auth: authRoles.admin }
];

export default CustomerRoutes;
