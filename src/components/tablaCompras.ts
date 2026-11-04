import React from 'react';
import { compra } from '../dominio/compra';


export class TablaCompras extends React.Component<{ datosIniciales: compra[] }, { compras: compra[] }> {
    constructor(props: { datosIniciales: compra[] }) {
        super(props);
        this.state = {
            compras: props.datosIniciales
        };
    }
}