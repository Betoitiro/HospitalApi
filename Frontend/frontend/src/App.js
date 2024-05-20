import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Renomeei de BrowserRouter para Router
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Exams from './pages/Exams/Exams';
import CadPatient from './pages/cadPatient/CadPatient';
import Consultation from './pages/Consultations/Consultation';
import ConsultationCreat from './pages/ConsultationCreate/ConsultationCreate';
import ConsultationFindAll from './pages/ConsultationFindAll/ConsultationFindAll';
import CadDoctor from './pages/CadDoctor/CadDoctor';
import ExamsCreate from './pages/ExamsCreate/ExamsCreate';
import ExamsFindAll from './pages/ExamsFindAll/ExamsFindAll';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/cadPatient' element={<CadPatient/>}/>
          <Route path='/doc' element={<CadDoctor/>}/>
          {/**Criar logica de validação para quando o usuario estiver logado */}
          <Route path='/' element={<Home/>}/>  
          <Route path='/consultation' element={<Consultation/>}/>
          <Route path='/consultationCreat' element={<ConsultationCreat/>}/>
          <Route path='/consultationFindAll' element={<ConsultationFindAll/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/exams' element={<Exams/>}/>
          <Route path='/examsCreate' element={<ExamsCreate/>}/>
          <Route path='/examstionFindAll' element={<ExamsFindAll/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
