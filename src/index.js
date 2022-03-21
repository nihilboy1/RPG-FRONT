import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {ContextProvider} from "../src/providers/Context.jsx" 

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
