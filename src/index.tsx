import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import {store} from "./redux/store"
import { Provider } from 'react-redux'

const rootCreate =  document.getElementById('root')

if(rootCreate) {
  const root = ReactDOM.createRoot(rootCreate);
  root.render(
     <BrowserRouter>
      <Provider store={store}>
         <App />
       </Provider>
    </BrowserRouter>
  );
  
}

