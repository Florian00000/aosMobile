import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native';
import { COLOR_GREEN_TAB, COLOR_RED_MELEE, COLOR_WHITE_SCREEN } from '../utils/colors';

const WeapponDetails = ({ weapon }) => {
    return (
        <View style={styles.container}>

            <Text
                style={weapon?.isShootingWeapon ? styles.rangedWeaponTitle : styles.meleeWeaponTitle}>
                {weapon?.isShootingWeapon ? "Arme de tir" : "Arme de mêlé"}
            </Text>
            <View style={{padding: 8}}>
                <View style={styles.headerRow}>
                    <Text style={styles.weaponName}>{weapon.name}</Text>
                    <View style={styles.keywords}>
                        {weapon && weapon.keywords ? (
                            weapon.keywords.map((keyword, index) => (
                                <Text key={index} style={styles.keyword}>{keyword}</Text>
                            ))
                        ) : null}
                    </View>

                </View>
                <View style={styles.statsRow}>
                    {weapon.isShootingWeapon &&
                        <View>
                            <Text style={styles.label}>Portée</Text>
                            <Text style={styles.value}>{weapon?.ranged}"</Text>
                        </View>

                    }
                    <View style={styles.statCell}>
                        <Text style={styles.label}>Attaque</Text>
                        <Text style={styles.value}>{weapon?.attacks}</Text>
                    </View>
                    <View style={styles.statCell}>
                        <Text style={styles.label}>Touche</Text>
                        <Text style={styles.value}>{weapon?.touch}</Text>
                    </View>
                    <View style={styles.statCell}>
                        <Text style={styles.label}>Blessure:</Text>
                        <Text style={styles.value}>{weapon?.wound}</Text>
                    </View>
                    <View style={styles.statCell}>
                        <Text style={styles.label}>Perf:</Text>
                        <Text style={styles.value}>{weapon?.perforation}</Text>
                    </View>
                    <View style={styles.statCell}>
                        <Text style={styles.label}>Dégats:</Text>
                        <Text style={styles.value}>{weapon?.damage}</Text>
                    </View>

                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLOR_GREEN_TAB,
        borderRadius: 6,
        marginVertical: 8,
        backgroundColor: COLOR_WHITE_SCREEN,
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    weaponName: {
        fontWeight: "bold",
        fontSize: 16,
    },
    keywords: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-end",
    },
    keyword: {
        marginLeft: 5,
        fontStyle: "italic",
        color: "gray",
    },
    rangedWeaponTitle: {
        backgroundColor: COLOR_GREEN_TAB,
        color: COLOR_WHITE_SCREEN,
        padding: 2,
        paddingLeft: 5
    },
    meleeWeaponTitle: {
        backgroundColor: COLOR_RED_MELEE,
        color: COLOR_WHITE_SCREEN,
        padding: 2,
        paddingLeft: 5
    }
    ,
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },
    statCell: {
        alignItems: "center",
        marginHorizontal: 4,
    },
    label: {
        fontSize: 12,
        color: "gray",
    },
    value: {
        fontWeight: "bold",
        fontSize: 14,
    }
})

export default WeapponDetails;
