import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const AddStaticpage = Loadable(lazy(() => import('./AddStaticpage')));
const StaticPageList = Loadable(lazy(() => import('./StaticPageList')));

const StaticPagesRoutes = [
	{ path: '/dashboard/staticpagelist', element: <StaticPageList />, auth: authRoles.admin },
	{ path: '/dashboard/addstaticpage', element: <AddStaticpage />, auth: authRoles.admin }
];

export default StaticPagesRoutes;
