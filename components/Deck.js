import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Text, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';




class Deck extends Component {

    render() {
        return (

            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Titulo do baralho</Title>
                    </Body>
                    <Right />
                </Header>
                <Container style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ color: 'black', fontSize: 50 }}>React</Text>
                    <MaterialCommunityIcons name='cards' color='blue' size={150} />
                </Container>

                <Container style={{ margin: 20, alignItems: 'center' }}>
                    <Text style={{ marginBottom: 25 }}>Quantidade de Cartas no Deck: 10</Text>
                    <Button block style={{ marginBottom: 15 }} >
                        <Text>Nova Carta</Text>
                    </Button>
                    <Button block  >
                        <Text>Iniciar Quiz</Text>
                    </Button>
                </Container>
            </Container>

        );
    }
}

export default Deck