import { View, StyleSheet, Text, Image, Pressable, FlatList, ScrollView } from 'react-native';
import { BASE_URL } from '../utils/constant';
import { useLayoutEffect } from 'react';
import WeapponDetails from '../components/WeapponDetails';
import BattleAptitudeDetails from '../components/BattleAptitudeDetails';
import { COLOR_BEIGE_SCREEN, COLOR_GREEN_TAB, COLOR_WHITE_SCREEN } from '../utils/colors';
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
            <Text style={styles.textTitle}>{unity.name}</Text>
            <ScrollView contentContainerStyle={styles.scrollContent} style={{ backgroundColor: COLOR_BEIGE_SCREEN }} >
                <View style={styles.scrollSection}>

                    <View style={styles.charac}>
                        <View>
                            <Text style={styles.textColor}>Mouvement: {unity.movement}</Text>
                            <Text style={styles.textColor}>Controle: {unity.control}</Text>
                        </View>
                        <View>
                            <Text style={styles.textColor}>Sauvegarde: {unity.save}+</Text>
                            <Text style={styles.textColor}>Santé: {unity.health}</Text>
                        </View>

                    </View>

                    {unity && unity.weapons ? (
                        <>
                        {/* Armes de tirs */}
                            {unity.weapons.some(weapon => weapon.isShootingWeapon) && (
                                <View>
                                    {unity.weapons
                                        .filter(weapon => weapon.isShootingWeapon)
                                        .map((weapon, index) => (
                                            <WeapponDetails key={`shoot-${index}`} weapon={weapon} />
                                        ))}
                                </View>
                            )}

                            {/* Armes de corps à corps */}
                            {unity.weapons.some(weapon => !weapon.isShootingWeapon) && (
                                <View>
                                    {unity.weapons
                                        .filter(weapon => !weapon.isShootingWeapon)
                                        .map((weapon, index) => (
                                            <WeapponDetails key={`mele-${index}`} weapon={weapon} />
                                        ))}
                                </View>
                            )}
                        </>
                    ) : null}
                    {unity?.battleAptitudes && <View>
                        {unity.battleAptitudes.map((battleAptitude, index) => (
                            <BattleAptitudeDetails key={`ba-${index}`} battleAptitude={battleAptitude} />
                        ))}
                    </View>}



                    <Text>
                        Mots-Clés:
                        {unity.keywords && unity.keywords.map((keyword, index) => (
                            <Text key={index}>{keyword}</Text>
                        ))}

                    </Text>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    image: {
        width: 350,
        height: 350,
        alignSelf: "center"
    },
    scrollContent: {
        flexGrow: 1
    },
    scrollSection: {
        backgroundColor: COLOR_BEIGE_SCREEN,
        width: "100%",
        padding: 20,
        paddingTop: 0,
    },
    textWhite: {
        color: COLOR_WHITE_SCREEN
    },
    textTitle: {
        paddingTop: 5,
        paddingLeft: 15,
        fontWeight: "bold",
        fontSize: 30,
        backgroundColor: COLOR_BEIGE_SCREEN
    },
    charac:{
        flexDirection: "row",
        width:"100%",
        justifyContent:"space-evenly",
        marginVertical:10
    }
})

export default UnityDetailsScreen;
