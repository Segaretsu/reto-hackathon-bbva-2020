import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Menu, Grid, Image, Segment, Reveal, Card } from 'semantic-ui-react';
import Constantes from '../../constants/Constants';
import Style from './Home.module.css'

const square = { width: 175, height: 175 }

export function Home() {
    const { APP_NAME } = Constantes;
    const { menu, grid, nav, opacarImg, contenedorPrincipal } = Style;

    const [activeItem, setActiveItem] = useState('bio');
    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <div>
            <Card className={nav} fluid color='gray' header={APP_NAME} />

            <div className={contenedorPrincipal}>
                <Grid columns={3} className={grid} stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/nan.jpg' size='large' />
                        </Grid.Column>
                        <Grid.Column centered>
                            <Reveal animated='move up' className={opacarImg}>
                                <Reveal.Content visible>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='large' />
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='large' />
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                        <Grid.Column>
                            <Reveal animated='move up' className={opacarImg}>
                                <Reveal.Content visible>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='large' />
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Image src='https://react.semantic-ui.com/images/avatar/large/justen.jpg' size='large' />
                                </Reveal.Content>
                            </Reveal>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <Menu tabular className={menu}>
                <Menu.Item
                    name='bio'
                    active={activeItem === 'bio'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='photos'
                    active={activeItem === 'photos'}
                    onClick={handleItemClick}
                />
            </Menu>
        </div>
    )
}