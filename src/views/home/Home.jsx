import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Button, Menu, Grid, Image, Segment } from 'semantic-ui-react';
import Constantes from '../../constants/Constants';
import Style from './Home.module.css'

const square = { width: 175, height: 175 }

export function Home() {
    const { APP_NAME } = Constantes;
    const { menu, grid } = Style;

    const [activeItem, setActiveItem] = useState('bio');
    const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <div>
            <Container>
                <h1>{APP_NAME}</h1>
                <Button animated='fade'>
                    <Button.Content visible>Dame clic</Button.Content>
                    <Button.Content hidden>Tan obediente</Button.Content>
                </Button>
            </Container>

            <Segment>
                <Grid columns={3} className={grid}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

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