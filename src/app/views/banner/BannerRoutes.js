import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const AddBanner = Loadable(lazy(() => import('./AddBanner')));
const BannerList = Loadable(lazy(() => import('./BannerList')));

const BannerRoutes = [
	{ path: '/dashboard/bannerlist', element: <BannerList />, auth: authRoles.admin },
	{ path: '/dashboard/addbanner', element: <AddBanner />, auth: authRoles.admin }
];

export default BannerRoutes;
