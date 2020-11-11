import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {AuthContext} from '../context/AuthContext';

const Routes = () => {
  const {token} = useContext(AuthContext);
  return token ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
