import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const AddFaq = Loadable(lazy(() => import('./AddFaq')));
const FaqList = Loadable(lazy(() => import('./FaqList')));

const FAQRoutes = [
	{ path: '/dashboard/faqlist', element: <FaqList />, auth: authRoles.admin },
	{ path: '/dashboard/addfaq', element: <AddFaq />, auth: authRoles.admin }
];

export default FAQRoutes;
