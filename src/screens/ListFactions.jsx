import React, { useEffect } from 'react';
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFactions } from '../store/factionSlice';
import { selectFactionsByAlliance } from '../store/selector';
import FlatCube from '../components/FlatCube';

const ListFactions = ({ navigation }) => {
    const dispacth = useDispatch();
    const groupedFactions = useSelector(selectFactionsByAlliance)

    useEffect(() => {
        dispacth(fetchAllFactions());
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
                <View style={{ backgroundColor: "#ddd", padding: 8 }}>
                    <Text style={{ fontWeight: "bold" }}>{allianceName}</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({})

export default ListFactions;
