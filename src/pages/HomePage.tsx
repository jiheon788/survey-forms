import { Navigate } from 'react-router-dom';
import routerMeta from '@/lib/routerMeta';

const HomePage = () => {
  return <Navigate to={routerMeta.CreatePage.path} replace={true} />;
};

export default HomePage;
