import './App.css';
import {Navbar,Layout} from './Components'
import { CartProvider } from './CartContext';
import { RouterProvider } from 'react-router-dom';
import {router} from './Main'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <RouterProvider router={router} />
        {/* <Navbar/>
        <Layout /> */}
      </CartProvider>
    </div>
  );
}

export default App;
