import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const isAuthenticate = false;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticate) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
