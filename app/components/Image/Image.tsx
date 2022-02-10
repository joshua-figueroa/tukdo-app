import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

type Props = {
    person: {
        name: string,
        uri: string
    }
}

const Image: React.FC<Props> = ({ person }) => (
    <View style={styles.container}>
        <Avatar
            size={120}
            rounded
            source={{ uri: person.uri }}
        />
        <Text style={styles.name}>{person.name}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20
    },
    name: {
        color: "#666666",
        fontSize: 18,
        fontWeight: "700",
        marginTop: 15
    }
})

export default Image