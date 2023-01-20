import logo from './logo.svg';
import Header from './components/headerComponent/Header.jsx'
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import CheckOutScreen from './screens/CheckOutScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import CustomScreen from './screens/CustomScreen.jsx'
import Login from './screens/Login.jsx'
import Signup from './screens/Signup.jsx'
import AuthScreen from './screens/AuthScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/Checkout/:user' element={<CheckOutScreen />} />
            <Route path='/Product/:id' element={<ProductScreen />} />
            <Route path='/CreateCard/:user' element={<CustomScreen />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/signup' element={<Signup />} />
            {/* <Route path='/auth' element={<AuthScreen />} /> */}
        </Routes>
      </main>

    </div>
  );
}

export default App;
