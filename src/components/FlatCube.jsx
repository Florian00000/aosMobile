import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';

const FlatCube = ({item, navigation}) => {  

  // const [pokemonDetail, setPokemonDetail] = useState(null);

  const styles = StyleSheet.create({
    cube: {
      backgroundColor: "#e8e8e8",
      flex: 1,
      height: 120,
      borderRadius: 10,
      marginTop: 10,
      marginHorizontal: 10,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      elevation: 8
    },
    textCube: {
      fontSize: 20,
      fontWeight: 'bold',
      color: "black",
      marginLeft: 15
    },
    textNumber: {
      fontWeight: "bold"
    },
    image: {
      width: 100,
      height:100
    }
  });


  // useEffect(() => {
  //   axios.get(item.url)
  //   .then(response => {
  //     setPokemonDetail(response.data)
  //   })
  //   .catch(error => console.error(error));
  // }, [item])


  // const redirect = (pokemonDetail) => {
  //   const details = {...pokemonDetail, url: pokemon.url}    
  //   navigation.navigate("DetailsPokemon", details)
  // }

  return (
    // <Pressable onPress={() => redirect(pokemonDetail)}>
      <View style={styles.cube}>
       {item && item.imagePath ? (
        <Image style={styles.image} source={{uri: `${BASE_URL}${item.imagePath}`}}/>
        ) : null}        
        <Text style={styles.textCube}>{item.name} </Text>        
      </View>
    // </Pressable>
  );
};

export default FlatCube;
