import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const BattleAptitudeDetails = ({ battleAptitude }) => {
    return (
        <View>
            <Text>{battleAptitude?.phase}</Text>
            <Text>{battleAptitude?.name}: {battleAptitude?.description} </Text>
            <Text>Effet: {battleAptitude?.effect}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default BattleAptitudeDetails;
