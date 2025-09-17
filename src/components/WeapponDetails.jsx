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
                {weapon.isShootingWeapon && 
                <Text>Portée: {weapon?.ranged}"</Text>
                }
                <Text>Attaque: {weapon?.attacks}</Text>
                <Text>Touche: {weapon?.touch}</Text>
                <Text>Blessure: {weapon?.wound}</Text>
                <Text>Perf: {weapon?.perforation}</Text>
                <Text>Dégats: {weapon?.damage}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({})

export default WeapponDetails;
