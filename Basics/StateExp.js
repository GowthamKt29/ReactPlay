import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class StateExp extends Component {

    constructor(){
    super()

    this.state = { name: 'Ashok' }
    setInterval(() => {
        this.setState({ name: 'Gowtham ashok' })
    }, 1000
    )
}

state = {
    name: 'gowtham'
}

updateStae = () => this.setState({ name: 'gowtham ashok' })

render() {
    return (
        <View style={styles.container}>

            <Text onPress={this.updateStae}
                style={styles.helloStyle}>This was {this.state.name}</Text>

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
        padding: 20,
    },

    helloStyle: {
        fontSize: 20

    }
});