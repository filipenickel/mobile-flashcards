import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Text,Button } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';


class NewCard extends Component {

    render() {
        return (

            <Container>
                <Header>
                    <Text>Nova Carta</Text>
                    </Header>
                <KeyboardAvoidingView>
                    <Form keyboardDismissMode="interactive">
                        <Item floatingLabel>
                            <Label style={{textAlign:'center'}}>NOVA PERGUNTA</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{textAlign:'center'}}>INSIRA UMA RESPOSTA</Label>
                            <Input />
                        </Item>
                    </Form>
                </KeyboardAvoidingView>
                <Container style={{ margin: 20, alignItems: 'center' }}>
                    <Button block style={{ marginBottom: 15 }} >
                        <Text>Salvar Carta</Text>
                    </Button>
                </Container>
            </Container>

        );
    }
}

export default NewCard