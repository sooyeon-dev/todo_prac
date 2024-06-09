import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home';
import Main from './Components/Main';
import Login from './Components/Login';
import Admin from './Components/Admin';
import NotFound from './Components/NotFound';
import './Styles/reset.css';
// TODO: URL 파라미터, 쿼리스트링 

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* <Home /> */}
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/main' element={<Main/>}></Route>
                    <Route path='/main/:mainId' element={<Main/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/admin' element={<Admin/>}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;