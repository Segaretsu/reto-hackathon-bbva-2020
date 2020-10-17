import React, { useState } from 'react';
import { Menu, Grid, Image, Reveal, Card, Container, Button, Icon, Modal, Header } from 'semantic-ui-react';
import Constantes from '../../constants/Constants';
import Style from './Home.module.css';
import fondo from '../../img/fondo.png'

const square = { width: 175, height: 175 }

export function Home() {
    const { APP_NAME } = Constantes;
    const { menu, grid, nav, opacarImg, contenedorPrincipal, parrafo, efectoHoverImgPrincipal, sombra, centrarContenido, textoInicial, frase} = Style;

    const [activeItem, setActiveItem] = useState('bio');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Card className={nav} fluid color='blue' header={APP_NAME} />

            <Container className={contenedorPrincipal}>
                <Grid columns={3} className={grid} stackable>
                    <Grid.Row>
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
                        <Grid.Column className={sombra}>
                            <Reveal animated='move up' className={opacarImg}>
                                <Reveal.Content visible>
                                    <Image src={fondo} size='massive' />
                                    <div className={textoInicial}>
                                        <p className={frase} >"José decide que por ahora no puede ir, pero comenta
                                        que puede ir en otro momento que todos tengan dinero"</p>
                                        <Icon name='hand point up' size='big' />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='massive' />
                                </Reveal.Content>
                            </Reveal>

                        </Grid.Column>
                        <Grid.Column className={sombra}>
                            <Reveal animated='move up' className={opacarImg}>
                                <Reveal.Content visible>
                                    <Image src={fondo} size='massive' />
                                    <div className={textoInicial}>
                                        <p className={frase} >"José decide no ir"</p>
                                        <Icon name='hand point up' size='big' />
                                    </div>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='massive' />
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

            <Menu tabular className={menu}>
                <Menu.Item
                    name='Uno'
                    active={activeItem === 'Uno'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Dos'
                    active={activeItem === 'Dos'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Tres'
                    active={activeItem === 'Tres'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Cuatro'
                    active={activeItem === 'Cuatro'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='Cinco'
                    active={activeItem === 'Cinco'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )
}