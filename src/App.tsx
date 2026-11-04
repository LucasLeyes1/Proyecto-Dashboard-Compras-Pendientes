import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
// Asegúrate de que el nombre del componente coincida con el export default de tablaCompras.tsx
import TablaCompras from './components/tablaCompras'; 
// Importa el array de prueba que creaste
import { comprasMock } from './mock/datosCompraMock'; 

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Ruta principal que carga la tabla y le pasa los datos sin usar useEffect */}
        <Route 
          path="/compras" 
          element={<TablaCompras datosIniciales={comprasMock} />} 
        />
        
        {/* Si escribes cualquier otra URL, te redirige automáticamente a /compras */}
        <Route path="*" element={<Navigate to="/compras" replace />} />
      </Routes>
    </HashRouter>
  );
}