import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';

const App = () => {
  return (
    <RecoilRoot>
        <Routes>
            <Route path='/' element={ <Login/> } />
            <Route exact path='/home' element={ <Home/> } />
        </Routes>
    </RecoilRoot>
  );
}

export default App;
