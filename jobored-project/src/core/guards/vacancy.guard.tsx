import { Paths } from 'constants/paths';
import { Navigate } from 'react-router-dom';
import { useAppState } from 'store';

interface IGuardRoute {
  children: JSX.Element;
}

export const GuardedRoute = ({ children }: IGuardRoute): JSX.Element => {
  const {
    state: { favorites },
  } = useAppState();
  
  return favorites.ids.length ? children : <Navigate to={Paths.notFound} />;
};
