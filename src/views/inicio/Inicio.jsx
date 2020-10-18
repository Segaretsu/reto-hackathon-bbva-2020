import React from 'react';
import { Container, Card, Image, Button, Icon, Grid } from 'semantic-ui-react';
import Constantes from '../../constants/Constants';
import Style from '../home/Home.module.css';
import Styles from './Inicio.module.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route, Redirect
// } from "react-router-dom";


export function Inicio() {

    const { APP_NAME } = Constantes;
    const { nav } = Style;
    const { contenedorPrincipal, titulo, btn, grid } = Styles;

    return (

        <div className={contenedorPrincipal}>
            <Card className={nav} fluid color='blue' header={APP_NAME} />
            <Container className={grid}>
                <Grid  divided='vertically' stackable className={grid}>
                    <Grid.Row columns={2} className={grid} >
                        <Grid.Column floated='left' width={6}>
                            <h1 className={titulo}>FEDU</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, assumenda
                                 tempora aut numquam doloribus rerum ducimus expedita illum aliquam facilis
                                  nostrum maxime doloremque porro nisi libero. Eligendi quaerat dolorum ratione!</h3>
                            <Button icon labelPosition='right' className={btn} href='/inicio'>
                                Comenzar
                                <Icon name='right arrow' />
                            </Button>

                        </Grid.Column>
                        <Grid.Column floated='right' width={6} >
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </Container>
        </div>
    );
}