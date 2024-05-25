import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PrevisionPage from 'views/previsions';
import EtCapPage from 'views/et-cap';
import DimPage from 'views/dim';
import AidePage from 'views/aide';
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default/')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <DashboardDefault />
    },
    {
      path: 'previsions',
      element: < PrevisionPage/>
    },
    {
      path: 'et-cap',
      element: <EtCapPage />
    },
    {
      path: 'dim',
      element: <DimPage/>
    },
    {
      path: 'aide',
      element: <AidePage />
    }
  ]
};

export default MainRoutes;
