import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Licoes from '~/pages/Licoes';
import Templates from '~/pages/Templates';
import Categorias from '~/pages/Categorias';
import Perfil from '~/pages/Perfil';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/licoes" component={Licoes} isPrivate />
      <Route path="/templates" component={Templates} isPrivate />
      <Route path="/categorias" component={Categorias} isPrivate />
      <Route path="/Perfil" component={Perfil} isPrivate />
    </Switch>
  );
}
