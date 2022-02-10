import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Image from '../../components/Image/Image';
import Screen from '../../components/Screen/Screen';
import { fg } from '../../config/theme';
import { people } from '../../helpers/data';

const About: React.FC<{}> = () => (
    <Screen>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.description}>A module for grade - 11 senior high school students of Legazpi City Science High School (LEGASCI) on the subject Basic Calculus in which it helps to aid students to have a greater understanding about the different lesson and to have an in-depth foundation of knowledge about the subject Basic Caculcus.</Text>
                <View style={styles.images}>
                    {people.map(person => (
                        <Image key={person.name} person={person} />
                    ))}
                </View>
            </View>
        </ScrollView>
    </Screen>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    description: {
        color: fg,
        textAlign: "justify",
        fontSize: 14
    },
    images: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})


export default About