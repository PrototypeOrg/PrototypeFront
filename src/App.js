
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./home/pages/Home";
import Header from "./navbar/pages/Header";
import Registro from "./registro/pages/Registro"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <div>
       <Router>
           <Header/>
          <Routes>
          <Route path='/' element={<Home/>} />
          </Routes>
          <Routes>
          <Route path="/Registro" element={<Registro/>}>
             
            </Route>
            </Routes>
       </Router>     
      </div>
  );
}

export default App;
