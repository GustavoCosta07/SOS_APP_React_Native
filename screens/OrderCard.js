import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import OrderDetails from "./OrderDetails"

const Drawer = createDrawerNavigator();




const OrderCard = ({ orderNumber, description, openDate, directedDate }) => {
    const navigation = useNavigation();

    return (

        <View style={styles.card}>
            <Text style={styles.orderNumber}>Ordem #{orderNumber}</Text>
            <Text style={styles.subText}>
                <Text style={styles.boldText}>Aberto dia:</Text>{" "}
                <Text style={styles.lightText}>{openDate}</Text>
            </Text>
            <Text style={styles.subText}>
                <Text style={styles.boldText}>Direcionado dia:</Text>{" "}
                <Text style={styles.lightText}>{directedDate}</Text>
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OrderDetails', { orderNumber, description, openDate, directedDate })}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 20,
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        marginTop: 5,
    },
    boldText: {
        fontWeight: 'bold',
        color: 'grey',
    },
    lightText: {
        color: 'grey',
    },
    button: {
        backgroundColor: '#4E54C8',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default OrderCard;
