import React,{Component} from 'react';
import { Text } from 'react-native';
import { Container, Header, Tab, Tabs,Badge } from 'native-base';
import ListaDecks from './ListaDecks'

 class Principal extends Component {
  render() {
    return (
      <Container >
      <Header hasTabs />
      <Tabs initialPage={0} >
        <Tab heading="Coleção de Cards" style={{backgroundColor:'grey'}}>
            <ListaDecks /> 
            <ListaDecks />
            <ListaDecks />
                       
        </Tab>
        
      </Tabs>
    </Container>
    );
  }
}
export default Principal