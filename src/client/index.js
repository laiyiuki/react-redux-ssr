import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../routes';
import configureStore from '../common/store/configureStore';
import App from '../common/App';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
      {/* <App routes={routes} /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../common/containers/App', () => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(routes)}
          {/* <App routes={routes} /> */}
        </BrowserRouter>{' '}
      </Provider>,
      document.getElementById('root')
    );
  });
}
