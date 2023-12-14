import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
import EditBanner from './EditBanner';

const AddBanner = Loadable(lazy(() => import('./AddBanner')));
const BannerList = Loadable(lazy(() => import('./BannerList')));

const BannerRoutes = [
	{ path: '/dashboard/bannerlist', element: <BannerList />, auth: authRoles.admin },
	{ path: '/dashboard/addbanner', element: <AddBanner />, auth: authRoles.admin },
	{ path: '/dashboard/editbanner', element: <EditBanner />, auth: authRoles.admin }
];

export default BannerRoutes;
