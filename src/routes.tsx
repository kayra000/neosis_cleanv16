import LandingPage from './pages/LandingPage';
import VehiclesPage from './pages/VehiclesPage';
import ComponentsPage from './pages/ComponentsPage';
import SystemComponentsPage from './pages/SystemComponentsPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServiceBilisimPage from './pages/ServiceBilisimPage';
import ServiceSahaPage from './pages/ServiceSahaPage';
import ServiceHaberlesme from './pages/ServiceHaberlesme';
import MorePage from './pages/MorePage';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
}

const routes: RouteConfig[] = [
  { name: 'Home',                 path: '/',                        element: <LandingPage /> },
  { name: 'Vehicles',             path: '/vehicles',                element: <VehiclesPage /> },
  { name: 'Components',           path: '/components',              element: <ComponentsPage /> },
  { name: 'System Components',    path: '/system-components',       element: <SystemComponentsPage /> },
  { name: 'Products',             path: '/products',                element: <ProductsPage /> },
  { name: 'Bilişim',              path: '/services/bilisim',        element: <ServiceBilisimPage /> },
  { name: 'Saha Teknik',          path: '/services/saha',           element: <ServiceSahaPage /> },
  { name: 'Haberleşme',           path: '/services/haberlesme',     element: <ServiceHaberlesme /> },
  { name: 'More',                 path: '/more',                    element: <MorePage /> },
  { name: 'About',                path: '/about',                   element: <AboutPage /> },
];

export default routes;
