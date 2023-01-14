import logo from './logo.svg';
import Header from './components/headerComponent/Header.jsx'
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import CheckOutScreen from './screens/CheckOutScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import CustomScreen from './screens/CustomScreen.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/Checkout' element={<CheckOutScreen />} />
            <Route path='/Product/:id' element={<ProductScreen />} />
            <Route path='/CreateCard/:user' element={<CustomScreen />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
