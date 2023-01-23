
import Register2 from './components/Register2'
import Login from './components/Login';
import Evidencias from './components/Evidencias';
import Home from './components/Home';
import Requisitos from './components/Requisitos';
import AnalisisDiseno from './components/AnalisisDiseno';
import PlanPruebas from './components/PlanPruebas';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div>
        <Routes>
        
          <Route path="/planPruebas" element={<PlanPruebas/>}>
          </Route>
          <Route path="/analisisDiseno" element={<AnalisisDiseno/>}>
          </Route>

          <Route path="/requisitos" element={<Requisitos/>}>
          </Route>

          <Route path="/evidencias" element={<Evidencias/>}>
          </Route>

          <Route path="/login" element={<Login/>}>
          </Route>

          <Route path="/register" element={<Register2/>}>
          </Route>

          <Route  path="/" element={<Home/>}>
          </Route>
          
        </Routes>
      </div>
    </Router>

  );
}

export default App;
