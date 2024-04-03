/*
* File: AboutScreen.js
* Author: Ferencsik Boglárka
* Copyright: 2024, Ferencsik Boglárka
* Group: Szoft II/2/N
* Date: 2024-04-03
* Github: https://github.com/fbog05/
* Licenc: GNU GPL
*/

import { StyleSheet, Text, View } from 'react-native';

export function AboutScreen(){

    return(
        <View style={styles.container}>
            <Text style={styles.cim}>Névjegy</Text>
            <Text style={styles.szoveg}>Ferencsik Boglárka</Text>
            <Text  style={styles.szoveg}>Szoft II/2/N</Text>
            <Text  style={styles.szoveg}>2024. 04. 03.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink',
        alignItems: 'center',
    },

    cim: {
        color: '#800040',
        fontWeight: "800",
        fontSize: 25,
        marginTop: 35,
        paddingBottom: 100,
    },

    szoveg: {
        color: '#800040',
        fontWeight: "600",
        padding: 5,
        fontSize: 17,
    },
})