import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {store} from './Store/store'
import {Provider as ProviderSpectrum, defaultTheme} from "@adobe/react-spectrum";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <ProviderSpectrum theme={defaultTheme} colorScheme="light" height={{S: "250px", M: "640px", L: "700px", XL:"800px", XXL: "1020px"}} 
      width={{S: "640px", M: "1000px", L:"1150px", XL:"1360px", XXL: "1900px"}}>
      <App  />
      </ProviderSpectrum>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
