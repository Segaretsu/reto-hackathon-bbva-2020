import React, { useState } from 'react';
import { Menu, Grid, Image, Reveal, Card, Container, Button, Icon, Modal, Header } from 'semantic-ui-react';
import Constantes from '../../constants/Constants';
import Style from './Home.module.css';
import fondo from '../../img/fondo.png';
import {VisorDecisiones} from '../visor-decisiones/VisorDesiciones';
import { Link } from 'react-router-dom';

const square = { width: 175, height: 175 }

export function Home() {
    const { APP_NAME } = Constantes;
    const { menu, grid, nav, opacarImg, contenedorPrincipal, parrafo, efectoHoverImgPrincipal, sombra, textoInicial, sombreado, frase, posicionBoton} = Style;

    const [activeItem, setActiveItem] = useState('bio');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Card className={nav} fluid color='blue' header={<Link to='/'>{APP_NAME}</Link>}/>

            <VisorDecisiones/>
        </div>
    )
}