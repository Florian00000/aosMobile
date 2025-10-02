import React, { useEffect } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFactions } from '../store/factionSlice';
import { selectFactionsByAlliance } from '../store/selector';
import FlatCube from '../components/FlatCube';
import { COLOR_WHITE_SCREEN } from '../utils/colors';

const ListFactions = ({ navigation }) => {
    const dispatch = useDispatch();
    const groupedFactions = useSelector(selectFactionsByAlliance)

    useEffect(() => {
        dispatch(fetchAllFactions());
        console.log("groupedFactions");             
        console.log(groupedFactions);          
    }, [])

    return (
        <SectionList
            sections={groupedFactions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <FlatCube item={item} navigation={navigation} screen={"ListUnits"}/>
            )}
            renderSectionHeader={({ section: { allianceName } }) => (
                <View style={{ backgroundColor: COLOR_WHITE_SCREEN, padding: 8, marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{allianceName}</Text>
                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 8, marginTop: 15 }} />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({})

export default ListFactions;
