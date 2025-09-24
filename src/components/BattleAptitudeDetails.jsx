import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLOR_WHITE_SCREEN, phaseColor } from '../utils/colors';

const BattleAptitudeDetails = ({ battleAptitude }) => {    

    return (
        <View style={styles.container}>
            <Text style={[styles.headContainer, { backgroundColor: phaseColor(battleAptitude) }]}>{battleAptitude?.phase}</Text>
            <Text>{battleAptitude?.name}: {battleAptitude?.description} </Text>
            <Text>Effet: {battleAptitude?.effect}</Text>
            {battleAptitude?.keywords &&
                <Text>
                    Mots-Clés:
                    {battleAptitude.keywords.map((keyword, index) => (
                        <Text key={index}>{keyword}</Text>
                    ))}

                </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 8,
        backgroundColor: COLOR_WHITE_SCREEN,
        borderRadius: 2
    },
    headContainer: {
        color: COLOR_WHITE_SCREEN,
        borderRadius: 1,
        padding: 2,
        paddingLeft: 5
    }
})

export default BattleAptitudeDetails;
