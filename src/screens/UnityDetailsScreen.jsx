import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { BASE_URL } from '../utils/constant';
import { useLayoutEffect } from 'react';
import WeapponDetails from '../components/WeapponDetails';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const UnityDetailsScreen = ({ navigation, route }) => {
    const unity = route.params;
    console.log(unity);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `Unités ${unity.faction.name}`
        })
    })



    return (
        <View style={styles.main}>
            {unity && unity.imagePath ? (
                <Image style={styles.image} source={{ uri: `${BASE_URL}${unity.imagePath}` }} />
            ) : null}
            <View style={styles.section}>
                <View style={styles.mainInfo}>
                    <Text style={[styles.textColor, styles.textTitle]}>{unity.name}</Text>
                </View>
                <View>
                    <Text style={styles.textColor}>Mouvement: {unity.movement}</Text>
                    <Text style={styles.textColor}>Sauvegarde: {unity.save}+</Text>
                    <Text style={styles.textColor}>Controle: {unity.control}</Text>
                    <Text style={styles.textColor}>Santé: {unity.health}</Text>

                </View>

                {unity && unity.weapons ? (
                    <>
                        {/* Armes de tir */}
                        {unity.weapons.some(weapon => weapon.isShootingWeapon) && (
                            <View style={styles.typeDisposition}>
                                <Text style={styles.textColor}>Ames de tir</Text>
                                {unity.weapons
                                    .filter(weapon => weapon.isShootingWeapon)
                                    .map((weapon, index) => (                                        
                                        <WeapponDetails key={`shoot-${index}`} weapon={weapon}/>
                                    ))}
                            </View>
                        )}

                        {/* Armes de corps à corps */}
                        {unity.weapons.some(weapon => !weapon.isShootingWeapon) && (
                            <View style={styles.typeDisposition}>
                                <Text style={styles.textColor}>Ames de Mêlé</Text>
                                {unity.weapons
                                    .filter(weapon => !weapon.isShootingWeapon)
                                    .map((weapon, index) => (
                                       <WeapponDetails key={`mele-${index}`} weapon={weapon}/>
                                    ))}
                            </View>
                        )}
                    </>
                ) : null}


            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center"
    },
    image: {
        width: 350,
        height: 350
    },
    section: {
        backgroundColor: "#fb6c6c",
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20
    },
    textColor: {
        color: "white"
    },
    textTitle: {
        fontWeight: "bold",
        fontSize: 30
    },
    mainInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline"
    },
    type: {
        backgroundColor: "#fe3e31",
        padding: 5,
        paddingHorizontal: 15,
        marginRight: 10,
        borderRadius: 4
    },
    typeDisposition: {
        flexDirection: "row",
        marginVertical: 5
    },
    catchPokemon: {
        height: 250,
        marginLeft: "auto",
        paddingTop: 190
    }
})

export default UnityDetailsScreen;
