import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const CouponList = Loadable(lazy(() => import('./CouponList')));
const AddCoupon = Loadable(lazy(() => import('./AddCoupon')));

const CouponRoutes = [
	{ path: '/dashboard/couponlist', element: <CouponList />, auth: authRoles.admin },
	{ path: '/dashboard/addcoupon', element: <AddCoupon />, auth: authRoles.admin }
];

export default CouponRoutes;
