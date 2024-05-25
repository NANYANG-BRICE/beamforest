// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    
    {
      id: '',
      title: 'Previsions',
      type: 'item',
      url: '/views/previsions',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    
    {
      id: '',
      title: 'ET-CAP',
      type: 'item',
      url: '/views/et-cap',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    
    {
      id: '',
      title: 'Dim',
      type: 'item',
      url: '/views/dim',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    
    {
      id: '',
      title: 'Aide',
      type: 'item',
      url: '/views/aide',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
