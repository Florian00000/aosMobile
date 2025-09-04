import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';

const WeapponDetails = ({ weapon }) => {
    return (
        <View>
            <View>
                <Text>{weapon.name}</Text>
                {weapon && weapon.keywords ? (                    
                    weapon.keywords.map((keyword, index) => (
                        <Text key={index}>{keyword}</Text>
                    ))
                ): null}
            </View>
            <View>
                <Text>Attaque: {weapon.attacks}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({})

export default WeapponDetails;
