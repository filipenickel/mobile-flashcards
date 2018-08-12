import React from 'react';
import {View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducers/index.js';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {setNotification} from '../util/notificationAPI';
import NewDeck from './deck/NewDeck';
import DeckList from './deck/DeckList.js';
import IndividualDeck from './deck/IndividualDeck.js';
import NewQuestion from './question/NewQuestion';
import Quiz from './quiz/Quiz.js'
import {StatusBar} from 'react-native';
import {Constants} from 'expo';

const Tabs = TabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'All Decks'
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
            },
        },
    }
);

const AppNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
          header: null
        }
      },
    IndividualDeck: {
        screen: IndividualDeck,
        navigationOptions: {
            headerTintColor: '#000',
        },
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#000',
        },
    },
    NewQuestion: {
        screen: NewQuestion,
        navigationOptions: {
            title: 'Add Question',
            headerTintColor: '#000',
        },
    },
});

export default class Index extends React.Component {
    componentDidMount() {
        setNotification();
    }

    render() {
        return <Provider store={createStore(reducer)}>
            <View style={{ flex: 1 }}>
        <View style={{ height: Constants.statusBarHeight }}>
          <StatusBar
            translucent
            backgroundColor="#fff"
            barStyle="light-content"
          />
        </View>
        <AppNavigator />
</View>
        </Provider>
    }
}
