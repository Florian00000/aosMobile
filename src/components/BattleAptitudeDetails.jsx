import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLOR_WHITE_SCREEN, phaseColor } from '../utils/colors';

const BattleAptitudeDetails = ({ battleAptitude }) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.headContainer, { backgroundColor: phaseColor(battleAptitude) }]}>{battleAptitude?.phase}</Text>
            <Text style={[styles.textContainer, {fontStyle:"italic"}]}><Text style={styles.textTitle}>{battleAptitude?.name}:</Text> {battleAptitude?.description} </Text>
            <Text style={styles.textContainer}><Text style={styles.textTitle}> Effet:</Text> {battleAptitude?.effect}</Text>
            {battleAptitude?.keywords &&
                <Text style={styles.textContainer}>
                    <Text style={styles.textTitle}>Mots-Clés: </Text>
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
        borderRadius: 2,
        elevation: 3,
    },
    headContainer: {
        color: COLOR_WHITE_SCREEN,
        borderRadius: 1,
        padding: 2,
        paddingLeft: 5
    },
    textContainer: {
        padding: 10,
        paddingVertical: 5
    },
    textTitle: {
        fontWeight: "bold",
        fontStyle:"normal"
    }
})

export default BattleAptitudeDetails;
