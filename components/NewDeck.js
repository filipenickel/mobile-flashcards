import React, { Component } from 'react';
import { Container, Header, Form, Item, Input, Label,Text,Button } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';


class NewDeck extends Component {

    render() {
        return (

            <Container>
                <Header />
                <KeyboardAvoidingView>
                    <Text style={{fontSize:20,textAlign:'center',margin:20}}>Qual é o título do seu novo deck?</Text>
                    <Form keyboardDismissMode="interactive">
                        <Item floatingLabel>
                            <Label style={{textAlign:'center'}}>Titulo do Deck</Label>
                            <Input />
                        </Item>
                    </Form>
                </KeyboardAvoidingView>
                <Container style={{ margin: 20, alignItems: 'center' }}>
                    <Button block style={{ marginBottom: 15 }} >
                        <Text>Salvar Deck</Text>
                    </Button>
                </Container>
            </Container>

        );
    }
}

export default NewDeck