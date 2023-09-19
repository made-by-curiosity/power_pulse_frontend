import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
// import { persistor, store } from 'redux/store';
import 'modern-normalize';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { theme } from 'utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/power_pulse_frontend">
        <App />
      </BrowserRouter>
      {/* </PersistGate>
      </Provider> */}
    </ThemeProvider>
  </React.StrictMode>
);
