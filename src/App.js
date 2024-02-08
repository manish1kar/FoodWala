import './index.css';
import Navbar from "./Components/Navbar"
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';

function App() {

  return (
      <div>
        <Provider store={appStore}>
          <Navbar/>
          <Outlet/>
        </Provider>  
      </div>
  );
}

export default App;
