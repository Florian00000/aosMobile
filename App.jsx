import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import ListUnits from './src/screens/ListUnits';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UnityDetailsScreen from './src/screens/UnityDetailsScreen';
import ListFactions from './src/screens/ListFactions';

const App = () => {
    const Stack = createNativeStackNavigator();

    // function MyStackNavigator() {
    //     <Stack.Navigator>
    //         <Stack.Screen name='ListUnits' component={ListUnits} />
    //         <Stack.Screen name='UnityDetails' component={UnityDetailsScreen} />
    //     </Stack.Navigator>
    // }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='ListFactions' component={ListFactions} options={{headerShown: false}}  />
                    <Stack.Screen name='ListUnits' component={ListUnits}  />
                    <Stack.Screen name='UnityDetails' component={UnityDetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({})

export default App;
