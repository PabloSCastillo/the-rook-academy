
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Blog from './pages/Blog/Blog';
import './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer';
// Importa otros componentes de página aquí, ej:
// import Cursos from './pages/Cursos'; 

function App() {
  return (
    <><Router>
      <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {<Route path="/cursos" element={<Courses />} />}
          {<Route path="/blog" element={<Blog />} />}
          {<Route path="/contacto" element={<Contact />} />}
        </Routes>
        {/* El Footer también puede ser global aquí */}
      </div>
    </Router><Footer /></>
  );
}

export default App;