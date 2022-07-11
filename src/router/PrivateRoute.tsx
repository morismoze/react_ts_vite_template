import { Redirect, Route, RouteProps } from 'wouter';

import { useAuth } from '@/api/auth';

export const PrivateRoute = (routeProps: RouteProps) => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...routeProps} />;
};
