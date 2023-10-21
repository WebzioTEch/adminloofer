import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const CategoryList = Loadable(lazy(() => import('./CategoryList')));
const AddCategory = Loadable(lazy(() => import('./AddCategory')));
const AddSubCategory=Loadable(lazy(() => import('./AddSubCategory')));

const CategoryRoutes = [
	{ path: '/dashboard/categorylist', element: <CategoryList />, auth: authRoles.admin },
	{ path: '/dashboard/addcategory', element: <AddCategory />, auth: authRoles.admin },
	{ path: '/dashboard/addsubcategory', element: <AddSubCategory />, auth: authRoles.admin }

];

export default CategoryRoutes;
