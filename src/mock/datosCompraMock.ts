import {Compra} from '../dominio/compra';

export const comprasMock: Compra[] = [
    {nCompra: 170,proveedor: 'xantana',compra: 'clara de huevo',fechaPedido: new Date('2026-11-04'),fechaEntrega: new Date('2026-11-05'),FechaPago: new Date('2026-11-06'),estado: 'pendiente a pedir'},
    {nCompra: 171,proveedor: 'caupolican',compra: 'arroz negro, arroz 00000, mix arroz',fechaPedido: new Date('2026-12-04'),fechaEntrega: new Date('2026-12-05'),FechaPago: new Date('2026-12-06'),estado: 'pendiente a pagar'},
    {nCompra: 172,proveedor: 'argenfrut',compra: 'chocolates, almendras c choco, mani con choco',fechaPedido: new Date('2026-10-04'),fechaEntrega: new Date('2026-10-05'),FechaPago: new Date('2026-10-06'),estado: 'pendiente a recibir'}
];