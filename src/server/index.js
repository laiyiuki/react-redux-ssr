import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import express from 'express';
import helmet from 'helmet';

import serialize from 'serialize-javascript';

import App from '../common/App';
import { CourseAdService } from '../common/services';
import routes from '../routes';
import configureStore from '../common/store/configureStore';
import { createStore } from 'redux';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  // .disable('x-powered-by')
  .use(helmet())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/course-ads', async (req, res) => {
    try {
      const store = configureStore();

      const promises = matchRoutes(routes, req.url).map(({ route }) =>
        route.loadData ? route.loadData : null
      );

      await Promise.all(promises);

      const finalState = store.getState();
      const staticContext = {};
      // Render the component to a string
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={staticContext}>
            <App routes={routes} />
          </StaticRouter>
        </Provider>
      );

      res.send(`
        <!doctype html>
        <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Razzle Redux Example</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }" defer crossorigin></script>`
            }
          </head>
          <body>
           <div id="root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(finalState)}
            </script>
          </body>
        </html>`);
    } catch (err) {
      console.log('err', err);
    }
  })

  .get('/courses', async (req, res) => {
    try {
      // First we iterate through our top level routes
      // looking for matches against the current url.
      // const matches = routes.map((route, index) => {
      //   const match = matchPath(req.url, route.path, route);
      //   // We then look for static getInitialData function on each top level component
      //   if (match) {
      //     const obj = {
      //       route,
      //       match,
      //       promise: route.component.getInitialData
      //         ? route.component.getInitialData({ match, req, res })
      //         : Promise.resolve(null),
      //     };
      //     return obj;
      //   }
      //   return null;
      // });
      console.log(req.path);
      console.log(req.url);

      const { data } = await CourseAdService.find();

      // Compile an initial state
      const preloadedState = { courseAds: data };

      // Create a new Redux store instance
      const store = configureStore(preloadedState);
      // Grab the initial state from our Redux store
      const finalState = store.getState();
      const staticContext = {};
      // Render the component to a string
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={staticContext}>
            <App routes={routes} />
          </StaticRouter>
        </Provider>
      );

      res.send(`
        <!doctype html>
        <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charSet='utf-8' />
            <title>Razzle Redux Example</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${
                    assets.client.js
                  }" defer crossorigin></script>`
            }
          </head>
          <body>
           <div id="root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serialize(finalState)}
            </script>
          </body>
        </html>`);
      // res.send({ data });
    } catch (err) {
      console.log('err', err);
      res.send(500);
    }
  });

//   .get('/*', (req, res) => {
//     fetchCounter(apiResult => {
//       // Read the counter from the request, if provided
//       const params = qs.parse(req.query);
//       const counter = parseInt(params.counter, 10) || apiResult || 0;

//       // Compile an initial state
//       const preloadedState = { counter };

//       // Create a new Redux store instance
//       const store = configureStore(preloadedState);

//       // Render the component to a string
//       const markup = renderToString(
//         <Provider store={store}>
//           <App />
//         </Provider>
//       );

//       // Grab the initial state from our Redux store
//       const finalState = store.getState();

//       res.send(`<!doctype html>
//     <html lang="">
//     <head>
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta charSet='utf-8' />
//         <title>Razzle Redux Example</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         ${
//           assets.client.css
//             ? `<link rel="stylesheet" href="${assets.client.css}">`
//             : ''
//         }
//           ${
//             process.env.NODE_ENV === 'production'
//               ? `<script src="${assets.client.js}" defer></script>`
//               : `<script src="${assets.client.js}" defer crossorigin></script>`
//           }
//     </head>
//     <body>
//         <div id="root">${markup}</div>
//         <script>
//           window.__PRELOADED_STATE__ = ${serialize(finalState)}
//         </script>
//     </body>
// </html>`);
//     });
//   });

export default server;
