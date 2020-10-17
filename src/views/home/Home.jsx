import React, { useState } from 'react';
import { Menu, Grid, Image, Reveal, Card, Container } from 'semantic-ui-react';
import Constantes from '../../constants/Constants';
import Style from './Home.module.css'

const square = { width: 175, height: 175 }

export function Home() {
    const { APP_NAME } = Constantes;
    const { menu, grid, nav, opacarImg, contenedorPrincipal, parrafo, efectoHoverImgPrincipal, sombra } = Style;

    const [activeItem, setActiveItem] = useState('bio');
    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <div>
            <Card className={nav} fluid color='blue' header={APP_NAME} />

            <Container className={contenedorPrincipal}>
                <Grid columns={3} className={grid} stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <div className={efectoHoverImgPrincipal}>
                                <Image src='https://react.semantic-ui.com/images/avatar/large/nan.jpg' size='massive' />
                                <p className={parrafo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nulla vero quaerat libero neque,
                                    adipisci rerum. Aliquam, accusamus! Doloribus corporis numquam vitae asperiores id maiores
                                    praesentium, explicabo quo repellendus dignissimos.</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column className={sombra}>
                            <Reveal animated='move up' className={opacarImg}>
                                <Reveal.Content visible>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='massive' />
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='massive' />
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column className={sombra}>
                            <Reveal animated='move up' className={opacarImg}>
                                <Reveal.Content visible>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='massive' />
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