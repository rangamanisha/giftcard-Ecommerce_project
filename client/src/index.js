import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './reducer';
import "typeface-cairo";
import "typeface-open-sans";
import "typeface-poppins";

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>, 
  document.getElementById('root')
);

