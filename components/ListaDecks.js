import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem,  Text, Body,Badge } from 'native-base';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {TouchableOpacity,Alert} from 'react-native'
import { white } from 'ansi-colors';

onPress = () => {
    
  Alert.alert('Funcionando');
  
}

class ListaDecks extends Component {

  render() {
    return (
      
          <List style={{backgroundColor:'white'}}>
          
            <ListItem>
            <MaterialCommunityIcons name='cards' size={40}/>
              <Body>
                <Text>React</Text>
                <Text note>Total de Cards: 50</Text>
              </Body>
              <TouchableOpacity onPress={onPress}>
                <Text>Ver</Text>
                </TouchableOpacity>
            </ListItem>
             
          </List>
             
          
      
      
      
    );
  }
}

export default ListaDecks