import React, { useEffect } from 'react';
import {View, StyleSheet, Text, FlatList, Button, Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListUnitsByFaction } from '../store/unitySlice';
import FlatCube from '../components/FlatCube';

const ListUnits = ({navigation}) => {
    const dispatch = useDispatch();

    const units = useSelector((state) => state.unity.units)

    useEffect(() => {
        //Changer plus tard la faction
        dispatch(fetchListUnitsByFaction("sylvaneth"))
    }, [])    

    return (
        <View style={styles.main}>
            {/* <View style={styles.pagination}>
                <Pressable style={[styles.buttonPage,  { opacity: previous ? 1 : 0.5 }]} onPress={() => dispatch(fetchNextListPokemons(previous))} disabled={!previous}>
                    <Text style={styles.buttonText}>Prec</Text>    
                </Pressable> 
                <Pressable style={[styles.buttonPage, { opacity: next ? 1 : 0.5 }]} onPress={() => dispatch(fetchNextListPokemons(next))} disabled={!next}>
                    <Text style={styles.buttonText}>Suiv</Text>    
                </Pressable>           
            </View>             */}
            <FlatList
            data={units}
            renderItem={({item}) => (
                <FlatCube item={item} navigation={navigation} /> 
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
    // buttonPage : {
    //     backgroundColor: "#f03d2c",
    //     width: 50,
    //     height:35,
    //     borderRadius: 5,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     margin: 5,        
    // },
    // buttonText :{
    //     color: "white",
    //     fontWeight: "bold"
    // },
    main: {
        paddingBottom: 40
    }
})

export default ListUnits;
