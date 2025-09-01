import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <HomeScreen/>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({})

export default App;
