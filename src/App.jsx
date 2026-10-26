import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EspecialistaLayout from './components/Especialistas/layout/EspecialistaLayout'
import Dashboard from './components/Especialistas/dashboard/Dashboard'
import EnConstruccion from './components/Especialistas/EnConstruccion'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/especialista" replace/>}/>

      <Route path="/especialista" element = {<EspecialistaLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="perfil" element={<EnConstruccion titulo="Perfil profesional"/>}/>
        <Route path="disponibilidad" element={<EnConstruccion titulo="Disponibilidad"/>}/>
        <Route path="agenda" element={<EnConstruccion titulo="Angenda"/>}/>
        <Route path="sesiones" element={<EnConstruccion titulo="Control de sesiones" />} />
        <Route path="evaluacion" element={<EnConstruccion titulo="Matriz de evaluación" />} />
        <Route path="expedientes" element={<EnConstruccion titulo="Expedientes" />} />
        <Route path="mensajeria" element={<EnConstruccion titulo="Mensajería" />} />
        <Route path="modulos" element={<EnConstruccion titulo="Módulos y microcertificaciones" />} />
        <Route path="*" element={<Navigate to="/especialista"/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App