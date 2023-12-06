import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import CustomerRoutes from './views/customer/CustomerRoutes';
import ProductRoutes from './views/product/ProductRoutes';
import OrderRoutes from './views/order/OrderRoutes';
import CategoryRoutes from './views/category/CategoryRoutes';
import BannerRoutes from './views/banner/BannerRoutes';
import FAQRoutes from './views/faq/FAQRoutes';
import CouponRoutes from './views/coupon/CouponRoutes';
import StaticPagesRoutes from './views/staticPage/StaticPageRoutes';
import AddListShopForm from './form/AddListShop';
import AddCollectionForm from './form/AddCollection';
import ListShopTable from './form/ListShop';
import ListCollectionTable from './form/ListCollection';
import EditCategoryForm from './form/EditCategoryForm';

// session pages
const NotFound = Loadable(lazy(() => import('app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('app/views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('app/views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('app/views/dashboard/Analytics')));
const Inventory = Loadable(lazy(() => import('app/views/dashboard/Inventory')));
const PrivacyPolicySection = Loadable(lazy(() => import('app/views/privacy/PrivacyPolicySection')));
const TermandConditionSection = Loadable(
  lazy(() => import('app/views/termandcondition/TermandConditionSection'))
);
const AboutusPage = Loadable(lazy(() => import('app/views/aboutus/AboutusPage')));

const routes = [
  {
    element: (
      // <AuthGuard>
      <MatxLayout />
      //  </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      {
        path: '/dashboard/default',
        element: <Analytics />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/inventory',
        element: <Inventory />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/privacy',
        element: <PrivacyPolicySection />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/termcondition',
        element: <TermandConditionSection />,
        auth: authRoles.admin
      },
      ,
      {
        path: '/dashboard/aboutus',
        element: <AboutusPage />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/add-list-shop',
        element: <AddListShopForm />,
        auth: authRoles.admin
      },

      {
        path: '/dashboard/add-list-shop-list',
        element: <ListShopTable />,
        auth: authRoles.admin
      },

      {
        path: '/dashboard/add-collection',
        element: <AddCollectionForm />,
        auth: authRoles.admin
      },

      {
        path: '/dashboard/add-collection-list',
        element: <ListCollectionTable />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/editcategory',
        element: <EditCategoryForm />,
        auth: authRoles.admin
      },
      // e-chart rooute
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      },
      ...CustomerRoutes,
      ...ProductRoutes,
      ...OrderRoutes,
      ...CategoryRoutes,
      ...BannerRoutes,
      ...FAQRoutes,
      ...StaticPagesRoutes,
      ...CouponRoutes
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="session/signin" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
