import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Platform } from "react-native";
import { Overlay } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { Title } from "../../components";
import Screen from "../../components/Screen/Screen";
import Section from "../../components/Section/Section";
import Topic from "../../components/Topic/Topic";
import { bg, overlayBG, textGray } from "../../config/theme";
import { data as sampleData } from "../../helpers/data";
import { HomeProps } from "../../model/navigation";
import { clearAllProgress, selectProgress } from "../../redux/reducers/progress";

type Props = {
    navigation: HomeProps["navigation"]
}

const Home: React.FC<Props> = ({ navigation }) => {
    const [topicNumber, setTopicNumber] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false)
    const savedProgress = useSelector(selectProgress)
    const dispatch = useDispatch()

    const _getProgress = (id: string) => savedProgress?.find((progress) => progress.id === id)?.progress! || 0

    return (
        <Screen>
            <Overlay isVisible={openDrawer} onBackdropPress={() => setOpenDrawer(false)} overlayStyle={styles.overlay}>
                <TouchableOpacity onPress={() => {
                    setOpenDrawer(false)
                    navigation.navigate("About")
                }}>
                    <Text style={styles.overlayText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.overlayText}>Resources</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={async () => {
                    await AsyncStorage.clear()
                    dispatch(clearAllProgress())
                }}>
                    <Text style={styles.overlayText}>Clear Data</Text>
                </TouchableOpacity>
            </Overlay>
            <SectionList
                sections={[{ data: sampleData[topicNumber].lessons }]}
                ListHeaderComponent={
                    <Title openDrawer={() => setOpenDrawer(true)} />
                }
                ListHeaderComponentStyle={{ backgroundColor: bg }}
                stickyHeaderIndices={[1]}
                renderItem={({ item, index }) => (
                    <Topic data={item} lessonNumber={index + 1} topic={sampleData[topicNumber].topic} progress={_getProgress(item.id)} />
                )}
                renderSectionHeader={() => (
                    <View style={styles.container}>
                        {sampleData.map((section, index) => (
                            <Section key={index} title={section.topic} onPress={() => setTopicNumber(index)} active={topicNumber === index} />
                        ))}
                    </View>
                )
                }
                keyExtractor={(item, index) => item.title + index}
                stickySectionHeadersEnabled
                showsVerticalScrollIndicator={false}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        backgroundColor: bg
    },
    overlay: {
        flex: 1,
        width: "50%",
        height: "100%",
        alignSelf: "flex-end",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? 20 : 50,
        backgroundColor: overlayBG
    },
    overlayText: {
        color: textGray,
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10
    }
});

export default Home;