import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { BASE_URL } from '../utils/constant';
import { useLayoutEffect } from 'react';
import WeapponDetails from '../components/WeapponDetails';
import BattleAptitudeDetails from '../components/BattleAptitudeDetails';
import { COLOR_BEIGE_SCREEN, COLOR_GREEN_TAB, COLOR_WHITE_SCREEN } from '../utils/colors';

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
                        <View style={styles.characColumn}>
                            <View style={styles.characItem}>
                                <Text style={styles.textCharacLabel}>Mouvement</Text>
                                <Text style={styles.textCharacValue}>{unity.movement}</Text>
                            </View>
                            <View style={styles.characItem}>
                                <Text style={styles.textCharacLabel}>Contrôle</Text>
                                <Text style={styles.textCharacValue}>{unity.control}</Text>
                            </View>
                        </View>

                        <View style={styles.characColumn}>
                            <View style={styles.characItem}>
                                <Text style={styles.textCharacLabel}>Sauvegarde</Text>
                                <Text style={styles.textCharacValue}>{unity.save} +</Text>
                            </View>
                            <View style={styles.characItem}>
                                <Text style={styles.textCharacLabel}>Santé</Text>
                                <Text style={styles.textCharacValue}>{unity.health}</Text>
                            </View>
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
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 8, marginTop: 10 }} />
                        <Text style={styles.aptitudeTitle}>Compétences</Text>
                        {unity.battleAptitudes.map((battleAptitude, index) => (
                            <BattleAptitudeDetails key={`ba-${index}`} battleAptitude={battleAptitude} />
                        ))}
                    </View>}



                    <View style={styles.container}>
                        <View style={styles.headKeywords}>
                            <Text style={styles.headKeywordsText}>Mots-Clés: </Text>
                        </View>

                        <Text style={styles.textKeywords}>
                            {unity.keywords?.join(", ")}
                        </Text>
                    </View>
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

    //Caractéristiques

    charac: {
        flexDirection: "row",        
        width: "100%",
        marginVertical: 10,
    },
    characColumn: {
        flex: 1,
        alignItems: "center",
    },
    characItem: {
        backgroundColor: COLOR_GREEN_TAB,    
        marginVertical: 6,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        minWidth: 120,                  
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,                  
    },
    textCharacLabel: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
    textCharacValue: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "900",
        marginTop: 4,
    },

    //aptitudes

    aptitudeTitle: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    },


    //Mots-clés
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 8,
        backgroundColor: COLOR_WHITE_SCREEN,
    },
    headKeywords: {
        backgroundColor: COLOR_GREEN_TAB,
        justifyContent: "center",
        paddingHorizontal: 8,
    },
    headKeywordsText: {
        color: COLOR_WHITE_SCREEN,
        fontWeight: "bold",
    },
    textKeywords: {
        flex: 1,
        flexWrap: "wrap",
        padding: 10,
    },
})

export default UnityDetailsScreen;
