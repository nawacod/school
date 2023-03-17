import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from './admin';
import Parent from './Parent';
import Result from './Result';
import Pass from './pass';
import A from './A';
import B from './b'
import C from './C';
import Announcment from './Announcment';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/announcment" element={<Announcment/>} />
        <Route path="/a" element={<A />} />
        <Route path="/c" element={<C />} />
        <Route path="/b" element={<B />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/result" element={<Result />}>
          <Route path="/result:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;