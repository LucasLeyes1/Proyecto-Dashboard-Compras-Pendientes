import { useState } from 'react';
import { Table, Container, Box } from '@chakra-ui/react';
import { Compra } from '../dominio/compra';
import CompraRow from './compraRow'; // Asegúrate de importar el componente hijo

interface TablaComprasProps {
  datosIniciales: Compra[];
}

export default function TablaCompras({ datosIniciales }: TablaComprasProps) {
  // Inicializamos el estado directo con el mock. Cero useEffect.
  const [compras, setCompras] = useState<Compra[]>(datosIniciales);

  return (
    <Container maxW="container.xl" p={5}>
      <Box bg="white" shadow="sm" rounded="md" overflow="hidden" borderWidth="1px">
        <Table.Root variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Nº Compra</Table.ColumnHeader>
              <Table.ColumnHeader>Proveedor</Table.ColumnHeader>
              <Table.ColumnHeader>Detalle</Table.ColumnHeader>
              <Table.ColumnHeader>Fecha Pedido</Table.ColumnHeader>
              <Table.ColumnHeader>Fecha Entrega</Table.ColumnHeader>
              <Table.ColumnHeader>Fecha Pago</Table.ColumnHeader>
              <Table.ColumnHeader>Estado</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          
          <Table.Body>
            {/* Iteramos sobre el estado y pasamos el objeto entero a CompraRow */}
            {compras.map((compra) => (
              <CompraRow 
                key={compra.nCompra} 
                compra={compra} 
              />
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Container>
  );
}