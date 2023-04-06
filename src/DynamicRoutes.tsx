import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/common/Layout';
import RouterMeta from '@/meta/RouterMeta';
import LoadingFallback from '@/components/common/LoadingFallback';

const lazyImport = (pageName: string) => lazy(() => import(`@/pages/${pageName}`));

const pages = Object.keys(RouterMeta).map((componentKey: string) => {
  return {
    Component: lazyImport(componentKey),
    path: RouterMeta[componentKey].path,
  };
});

const DynamicRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      {pages.map(({ Component, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Component />
            </Suspense>
          }
        />
      ))}
    </Route>
  </Routes>
);

export default DynamicRoutes;
