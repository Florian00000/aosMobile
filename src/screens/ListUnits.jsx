import React, { useEffect, useLayoutEffect } from 'react';
import {View, StyleSheet, Text, FlatList, Button, Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListUnitsByFaction } from '../store/unitySlice';
import FlatCube from '../components/FlatCube';

const ListUnits = ({navigation, route}) => {
    const dispatch = useDispatch();
    const faction = route.params;

    const units = useSelector((state) => state.unity.units)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Factions"
        })
    })

    useEffect(() => {        
        dispatch(fetchListUnitsByFaction(faction.name))      
        
    }, [])    

    return (
        <View style={styles.main}>
           
            <FlatList
            data={units}
            renderItem={({item}) => (
                <FlatCube item={item} navigation={navigation} screen={"UnityDetails"} /> 
            )}
            keyExtractor={(_item, index) => {
                return index.toString()
            }}
            numColumns={1}          
            />
        </View>
    );
}

const styles = StyleSheet.create({        
    main: {
        paddingBottom: 40
    }
})

export default ListUnits;
