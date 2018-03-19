import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import enhance from 'helpers/rendering/enhance';
import Welcome from 'components/welcome';
import Chat from 'components/chat';

export default props => (
  <Switch>
    <Route path="/" render={enhance(Welcome, props)} exact />
    <Route path="/conversation/:contacts" render={enhance(Chat, props)} exact />
    <Redirect to="/" />
  </Switch>
);
