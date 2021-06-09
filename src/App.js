import { useState } from 'react';
import './App.css';
import Customization from './pages/Customization';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Orders from './pages/Orders';
import { OrderContext } from './context/OrdersContext';
import { IdContext } from './context/IdContext';

function App() {

  const [orders, setOrders] = useState([]);
  const [id, setId] = useState(1);

  return (
      <div className="App">
        <Navbar />
        <OrderContext.Provider value={{orders, setOrders}}>
          <IdContext.Provider value={{id, setId}}>
            <Route exact path='/' component={Customization}/>
            <Route path='/orders' component={Orders} />
          </IdContext.Provider>
        </OrderContext.Provider>
        {/* <Customization /> */}
      </div>
  );
}

export default App;
