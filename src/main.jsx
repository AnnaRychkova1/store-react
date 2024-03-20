// for React Router

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'modern-normalize';
// import App from './components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import 'modern-normalize';
// import App from './components/App';
// import './index.css';

// import { UserProvider } from './UserContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>
// );
