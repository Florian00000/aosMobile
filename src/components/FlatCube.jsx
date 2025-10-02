import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { COLOR_WHITE_SCREEN } from '../utils/colors';

const FlatCube = ({ navigation, item, screen }) => {

  const styles = StyleSheet.create({
    cube: {
      backgroundColor: COLOR_WHITE_SCREEN,
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
      height: 100
    }
  });



  const redirect = () => {   
    navigation.navigate(screen, item)
  }

  return (
    <Pressable onPress={() => redirect()}>
      <View style={styles.cube}>
        {item && item.imagePath ? (
          <Image style={styles.image} source={{ uri: `${BASE_URL}${item.imagePath}` }} />
        ) : null}
        <Text style={styles.textCube}>{item.name} </Text>
      </View>
    </Pressable>
  );
};

export default FlatCube;
