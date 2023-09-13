import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>

       <Route path='/login' element={<LogIn></LogIn>}></Route>

       <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
    </div>
  );
}

export default App;
