import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import { NotFoundPage } from './Components/NotFoundPage';
import { Products } from './Components/Products';
import {Featured} from './Components/Featured';
import {New} from './Components/New';
import { Users } from './Components/Users';
import { UserDetails } from './Components/UserDetails';
import { Profile } from './Components/Profile';
import { AuthProvider } from './Components/AuthProvider';
import { Login } from './Components/Login';
import { RequiredAuth } from './Components/RequiredAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />}>
            {/* <Route index element={<Featured />} /> */}
            <Route path='featured' element={<Featured />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
          </Route>
          <Route path='profile' element={<RequiredAuth><Profile /></RequiredAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
