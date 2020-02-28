import Explore from '../frontend/explore/Index';
import Pricing from '../frontend/pricing/Index';


import Home from '../frontend/pages/Home';
import About from '../frontend/pages/About';

import Hr from '../frontend/department/Hr';
import Settings from '../backend/settings/Index';

const routes = [
  {
    path: '/',
    exact: true,
    auth: false,
    component: Explore,
    fallback: Home,
  },
  {
    path: '/pricing',
    exact: true,
    auth: false,
    component: Pricing,
  },
  {
    path: '/about',
    exact: true,
    auth: false,
    component: About,
  },
  {
    path: '/hr',
    exact: true,
    auth: false,
    component: Hr,
  },
  {
    path: '/dashboard/settings',
    exact: true,
    auth: false,
    component: Settings,
  },
];

export default routes;