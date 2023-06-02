import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ProductScreen from './components/ProductScreen/ProductScreen';
import PaymentScreen from './components/ProductScreen/PaymentScreen';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<HomeScreen />} />
        <Route path='/product' element={<ProductScreen />} />
        <Route path='/paynow' element={<PaymentScreen />} />
      </Routes>
    </div>
  );
}

export default App;
