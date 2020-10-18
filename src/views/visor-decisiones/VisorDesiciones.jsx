import React, { useState } from 'react';
import { Menu, Grid, Image, Reveal, Card, Container, Button, Icon, Modal, Header } from 'semantic-ui-react';

// Uso del estado con Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { arbolDecisiones, nodosDecisionTomada, arbolActual } from '../../stateManagement/recoil/atoms/atomArbolDecisiones';
import { opcionesDeDecision } from '../../stateManagement/recoil/selectors/selectorArbolDecisiones';
import Style from '../home/Home.module.css';
import fondo from '../../img/fondo.png';

export function VisorDecisiones() {

    const { menu, grid, nav, opacarImg, contenedorPrincipal, parrafo, efectoHoverImgPrincipal, sombra, centrarContenido, textoInicial, frase } = Style;

    const [arbol, setArbol] = useRecoilState(arbolDecisiones);
    const [nodosDesicion, setNodosDesicion] = useRecoilState(nodosDecisionTomada);
    const [decisionActual, setDecisionActual] = useRecoilState(arbolActual);
    const data = useRecoilValue(opcionesDeDecision);

    const tomarUnaDecision = (destino, opcion) => {
        const desicionTomada = decisionActual[opcion];
        console.log(desicionTomada);
        const newArbol = arbol;
        console.log(newArbol[destino][opcion])
        newArbol[destino]['desicionTomada'] = desicionTomada;
        console.log('Desiciones')
        console.log(newArbol[destino]['desicionTomada'])
        setArbol(newArbol);
        const newDecision = arbol[destino];
        setDecisionActual(newDecision);
        console.log(data)
        console.log(arbol)
    }

    const [activeItem, setActiveItem] = useState('bio');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Container className={contenedorPrincipal}>
                <Grid columns={3} className={grid} stackable>
                    <Grid.Row>
                        <Grid.Column></Grid.Column>
                        <Grid.Column>
                            <div className={efectoHoverImgPrincipal}>

                                <Modal
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}
                                    trigger={
                                        <Image src='https://react.semantic-ui.com/images/avatar/large/nan.jpg' size='massive' />
                                    }
                                >
                                    <Modal.Header>Descripción</Modal.Header>
                                    <Modal.Content image>
                                        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/nan.jpg' wrapped />
                                        <Modal.Description>
                                            <Header>Descripción de la situación</Header>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nulla vero quaerat libero neque,
                                            adipisci rerum. Aliquam, accusamus! Doloribus corporis numquam vitae asperiores id maiores
                                            praesentium, explicabo quo repellendus dignissimos.</p>
                                            <p><strong>
                                                Puedes escoger la respuesta situando el mouse sobre la imagen y presionando clic
                                                en el botón que va a ser visible sobre la misma.
                                            </strong></p>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button color='black' onClick={() => setOpen(false)}>
                                            Cerrar imagen
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                                <p className={parrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nulla vero quaerat libero neque,
                                adipisci rerum. Aliquam, accusamus! Doloribus corporis numquam vitae asperiores id maiores
                                    praesentium, explicabo quo repellendus dignissimos.</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column></Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={3} className={grid} stackable>
                    <Grid.Row>
                        {data.get("decisiones").map(decision => {
                            return (
                                <Grid.Column className={sombra}>
                                    <Reveal animated='move up' className={opacarImg}>
                                        <Reveal.Content visible>
                                            <Image src={fondo} size='massive' />
                                            <div className={textoInicial}>
                                                <p className={frase} >{decision[0]}</p>
                                                <Icon name='hand point up' size='big' />
                                            </div>
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='massive' />
                                        </Reveal.Content>
                                    </Reveal>
                                </Grid.Column>
                            )
                        })}
                    </Grid.Row>
                </Grid>
            </Container>
            <Button onClick={(e) => tomarUnaDecision('decisionPadre', 'opcion1')}>
                Dame clic
            </Button>
            <ul>
                {data}
            </ul>
        </div>
    );
}