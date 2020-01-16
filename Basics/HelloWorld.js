import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <Text style={styles.helloStyle}>Hello, world!</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'pink',
        padding:20,
    },

    helloStyle: {
        fontSize: 20

    }
});