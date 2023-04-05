import { Navigate } from 'react-router-dom';
import RouterMeta from '@/meta/RouterMeta';

const HomePage = () => {
  return <Navigate to={RouterMeta.CreatePage.path} replace={true} />;
};

export default HomePage;
