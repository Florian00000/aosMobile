import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLOR_WHITE_SCREEN, phaseColor } from '../utils/colors';

const BattleAptitudeDetails = ({ battleAptitude }) => {

    return (
        <View style={[styles.container, {borderColor: phaseColor(battleAptitude)}]}>
            <Text style={[styles.headContainer, { backgroundColor: phaseColor(battleAptitude) }]}>{battleAptitude?.phase}</Text>
            {battleAptitude.description ?
                (<Text style={[styles.textContainer, { fontStyle: "italic" }]}><Text style={styles.textTitle}>{battleAptitude?.name}:</Text> {battleAptitude?.description} </Text>)
                :
                (<Text style={[styles.textContainer, { fontWeight: "bold" }]}>{battleAptitude?.name}</Text>)
            }
            {battleAptitude?.announcement && (
                <Text style={styles.textContainer}><Text style={styles.textTitle}>Annonce:</Text> {battleAptitude?.announcement}</Text>
            )}
            <Text style={styles.textContainer}><Text style={styles.textTitle}>Effet:</Text> {battleAptitude?.effect}</Text>
            {battleAptitude?.keywords &&
                <View style={[styles.keywordsContainer, { backgroundColor: phaseColor(battleAptitude) }]}>
                    <View style={styles.headKeyword}>
                        <Text style={[styles.textTitle, styles.titleKeyword]}>Mots-Clés: </Text>
                    </View>
                    <View style={[styles.listKeywords, {borderColor: phaseColor(battleAptitude)}]}>
                        {battleAptitude.keywords.map((keyword, index) => (
                            <Text key={index} style={{ fontWeight: "bold" }}>{keyword}</Text>
                        ))}
                    </View>


                </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        marginVertical: 8,
        backgroundColor: COLOR_WHITE_SCREEN,
        borderRadius: 2,
        elevation: 3,
    },
    headContainer: {
        color: COLOR_WHITE_SCREEN,
        borderRadius: 1,
        padding: 4,
        paddingLeft: 5
    },
    textContainer: {
        padding: 10,
        paddingVertical: 5
    },
    textTitle: {
        fontWeight: "bold",
        fontStyle: "normal"
    },

    //keywords
    keywordsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    headKeyword: {
        width: "30%",
        justifyContent: "center",
        alignItems:"center"
    },
    titleKeyword:{
        color: COLOR_WHITE_SCREEN,
    },
    listKeywords: {
        backgroundColor: COLOR_WHITE_SCREEN,
        width: "70%",
        paddingLeft: 5,
        justifyContent: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        
    }
})

export default BattleAptitudeDetails;
