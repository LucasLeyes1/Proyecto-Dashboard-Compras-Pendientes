import { Table } from '@chakra-ui/react';
import { Compra } from '../dominio/compra'; 

interface CompraRowProps {
  compra: Compra;
}

export default function CompraRow({ compra }: CompraRowProps) {
  return (
<Table.Row>
      <Table.Cell>{compra.nCompra}</Table.Cell>
      <Table.Cell>{compra.proveedor}</Table.Cell>
      <Table.Cell>{compra.compra}</Table.Cell>
      <Table.Cell>{compra.fechaPedido.toLocaleDateString()}</Table.Cell>
      <Table.Cell>{compra.fechaEntrega.toLocaleDateString()}</Table.Cell>
      <Table.Cell>{compra.FechaPago.toLocaleDateString()}</Table.Cell>
      <Table.Cell>{compra.estado}</Table.Cell>
    </Table.Row>
  );
}