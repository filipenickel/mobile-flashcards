import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Text, Button } from 'native-base';


class ViewQuiz extends Component {

    render() {
        return (

            <Container >
            <Header>
                    <Left />
                    <Body>
                        <Title>Perguntas</Title>
                    </Body>
                    <Right />
                </Header>
            <Container style={{ alignItems: 'center', marginTop: 30,margin:30 }} >
                <Text style={{fontSize:20,textAlign:'center'}}>Pergunta aaaaaaaaaaaaaaaaaaaaa</Text>
                </Container>

                <Container style={{ margin: 20, alignItems: 'center' }}>
                    <Button block style={{ marginBottom: 15 }} >
                        <Text>Correto</Text>
                    </Button>
                    <Button block  >
                        <Text>Incorreto</Text>
                    </Button>
                </Container>
                </Container>

        );
    }
}

export default ViewQuiz