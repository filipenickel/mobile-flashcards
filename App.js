import React, {Component} from 'react';
import { View } from 'react-native';
import NewCard from './components/NewCard'
import { Container } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <NewCard />
        </Container>
      
      
    );
  }
}