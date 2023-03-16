import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Admin from './admin';
import Parent from './Parent';
import Result from './Result';
import Pass from './pass';


function App() {
  return (
    <BrowserRouter>
                   <Routes>
        <Route path="/pass" element={<Pass/>}/>
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