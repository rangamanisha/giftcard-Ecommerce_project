import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import "typeface-cairo";
import "typeface-open-sans";
import "poppins-font";

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>, 
  document.getElementById('root')
);

