/*
* File: InstrumentsScreen.js
* Author: Ferencsik Boglárka
* Copyright: 2024, Ferencsik Boglárka
* Group: Szoft II/2/N
* Date: 2024-04-03
* Github: https://github.com/fbog05/
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

export function InstrumentsScreen() {

    let host = "http://localhost:3000/"
    let endpoint = "hangszerek"
    let url = host + endpoint

    const [hangszerek, setHangszerek] = useState([]);

    function getHangszerek() {

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setHangszerek(res);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.cim}>Hangszerek</Text>
            <Pressable
                onPress={getHangszerek}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Lekér</Text>
            </Pressable>

            <FlatList
                data={hangszerek}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.szoveg}>{item.Nev}</Text>
                        <Text style={styles.szoveg}>{item.Tipus}</Text>
                        <Text style={styles.szoveg}>{item.Marka}</Text>
                        <Text style={styles.szoveg}>{item.Ev}</Text>
                    </View>
                )}
                ListHeaderComponent={() => <Text style={styles.header}>Név    Típus    Márka    Év</Text>}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cim: {
        color: '#800040',
        fontWeight: "800",
        fontSize: 25,
        marginTop: 35,
        paddingBottom: 20,
    },

    button: {
        backgroundColor: '#800040',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 40,
        shadowColor: '#171717',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: "700",
    },

    item: {
        border: 'solid 2px #800040',
        margin: 3,
        padding: 3,
        borderRadius: 3,
        boxShadow: '3px 3px 3px #800040',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffccd2',
    },

    szoveg: {
        color: '#800040',
        fontWeight: "600",
        padding: 5,
        fontSize: 17,
    },

    header: {
        flex: 1,
        justifyContent: 'space-between',
        textAlign: 'center',
        color: '#800040',
        fontWeight: "700",
        paddingBottom: 10,
        fontSize: 20,
    },
});
