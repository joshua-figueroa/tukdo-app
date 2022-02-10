import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle'
import { Lesson } from '../../model/lessons';
import { HomeProps } from '../../model/navigation';

type Props = {
    data: Lesson;
    lessonNumber: number;
    topic: string,
    progress: number
}

const Topic: React.FC<Props> = ({ data, lessonNumber, topic, progress }) => {
    const navigation = useNavigation<HomeProps['navigation']>();

    const _getProgressString = (progress: number) => {
        switch (progress) {
            case 0:
                return "Start"
            case 100:
                return "Start again"
            default:
                return "Continue"
        }
    }

    return (
        <View style={{ backgroundColor: data.cardColor, ...styles.container }}>
            <View style={styles.container1}>
                <ProgressCircle
                    percent={progress}
                    radius={20}
                    borderWidth={5}
                    color={data.progressColor}
                    bgColor={data.cardColor}
                    shadowColor="#fff"
                >
                    <Text style={{ fontSize: 10, color: "#fff" }}>{progress}%</Text>
                </ProgressCircle>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Lesson {lessonNumber}</Text>
                    <Text style={styles.subtitle}>{data.title}</Text>
                </View>
            </View>

            <Button
                title={_getProgressString(progress)}
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{
                    width: 100,
                    borderRadius: 8,
                    marginTop: 50
                }}
                titleStyle={{ color: 'white', fontWeight: "600", fontSize: 15 }}
                onPress={() => navigation.navigate('Lesson', { ...data, lessonNumber, topic })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 20,
        marginBottom: 20,
        padding: 20,
        borderRadius: 20
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    titleContainer: {
        marginLeft: 10
    },
    title: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 20
    },
    subtitle: {
        color: "#fff",
        fontSize: 14
    }
})

export default Topic