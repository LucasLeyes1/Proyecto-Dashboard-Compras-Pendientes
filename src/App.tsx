import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import {TablaCompras} from './components/tablaCompras';
import { comprasMock } from './mock/datosCompraMock'; // Ajusta la ruta si es necesario

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Ruta principal hacia tu vista de la tabla */}
        <Route 
          path="/compras" 
          element={<TablaCompras datosIniciales={comprasMock} />} 
        />
        
        {/* Redirección por defecto si la ruta no existe */}
        <Route path="*" element={<Navigate to="/compras" replace />} />
      </Routes>
    </HashRouter>
  );
}