import React from 'react';
import { Container } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

export function Home() {
    return (
        <div>
            <Container>
                <h1>Hola mundo</h1>
                <Button animated='fade'>
                    <Button.Content visible>Dame clic</Button.Content>
                    <Button.Content hidden>Tan obediente</Button.Content>
                </Button>
            </Container>
        </div>
    )
}