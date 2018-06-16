import React, {Component} from 'react';
import { View } from 'react-native';
import Principal from './components/Principal'
import { Container } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Principal/>
        </Container>
      
      
    );
  }
}