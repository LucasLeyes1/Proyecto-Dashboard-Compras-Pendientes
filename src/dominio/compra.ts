// import { constructor } from "react";

export class Compra{
    nCompra:number | null;
    proveedor: string;
    compra: string;
    fechaPedido: Date;
    fechaEntrega: Date;
    FechaPago: Date;
    estado: string;

    constructor(
        nCompra=null,
        proveedor='',
        compra='',
        fechaPedido=new Date(),
        fechaEntrega=new Date(),
        FechaPago=new Date(),
        estado=''
    ){
        this.nCompra=nCompra
        this.proveedor=proveedor
        this.compra=compra
        this.fechaPedido=fechaPedido
        this.fechaEntrega=fechaEntrega
        this.FechaPago=FechaPago
        this.estado=estado
    }

}