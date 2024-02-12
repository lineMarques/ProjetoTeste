import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackList } from "../../routes/app.routes";



export default function Dashboard() {
    //a variavel segue as props de NativeStackNavigationProp e diciona as props de StackList
    const navegation = useNavigation<NativeStackNavigationProp<StackList>>();

    const [mesa, setMesa] = useState('');

    async function abrirMesa() {
        //se Mesa estiver vazia, retorna
        if (mesa === "") {
            return;
        }

        //se o usuario digita a mesa é direcionado para a tela Order
        navegation.navigate('Order', { mesa: mesa, pedido_id: 'teste' });


    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Novo Pedido</Text>

            <TextInput style={styles.input}
                placeholder="Numero da mesa"
                placeholderTextColor={"#fff"}
                keyboardType="numeric"
                value={mesa}
                onChangeText={setMesa}
            />

            <TouchableOpacity style={styles.button} onPress={abrirMesa}>
                <Text style={styles.buttonText}>Abrir Mesa</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "#1d1d2e",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        margin: 24,
    },
    input: {
        width: "90%",
        height: 60,
        backgroundColor: "#101026",
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: "center",
        alignContent: "center",
        color: "#fff"
    },
    button: {
        width: "90%",
        height: 40,
        backgroundColor: "#3fffa3",
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        fontSize: 18,
        color: "#101026",
        fontWeight: "bold"

    }
})