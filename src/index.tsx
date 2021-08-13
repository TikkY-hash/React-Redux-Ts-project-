import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import ErrorBoundary from "./components/error-boundry";
import {Provider} from "react-redux";
import store from "./store";
import './index.scss'


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
              <ErrorBoundary>
                  <App />
              </ErrorBoundary>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

