import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useDispatch } from 'react-redux';
import { bg, fg } from '../../config/theme';
import LessonList from '../../LessonList';
import { LessonProps } from '../../model/navigation';
import { addProgress } from '../../redux/reducers/progress';
import { getData, storeData } from '../../storage';

type Props = LessonProps

const LessonPage: React.FC<Props> = ({ route }) => {
    let _carousel;
    const lesson = route.params;
    const width = Dimensions.get("window").width - 40
    const carouselData = LessonList.find(({ id }) => id === lesson.id)?.items!
    const [activeSlide, setActiveSlide] = useState(0)
    const scrollRef = useRef(null)
    const dispatch = useDispatch()

    const onPressTouch = (index: number) => {
        // @ts-ignore
        scrollRef.current?.scrollTo({
            y: 0,
            animated: false,
        });
        setActiveSlide(index)
    }

    useEffect(() => {
        (async () => {
            const savedProgress = await getData(lesson.id) as number
            const currentProgress = Math.round((activeSlide + 1) / carouselData.length * 100)

            if (savedProgress < currentProgress) {
                dispatch(addProgress({ id: lesson.id, progress: currentProgress }))
                await storeData(lesson.id, currentProgress)
            }
        })()
    }, [activeSlide])

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.lessonNumber}>Lesson {lesson.lessonNumber}: </Text>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
                <Carousel
                    ref={(c) => { _carousel = c; }}
                    data={carouselData}
                    renderItem={({ item }) => item}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => onPressTouch(index)}
                    enableMomentum
                />
            </ScrollView>

            <Pagination dotsLength={carouselData.length} activeDotIndex={activeSlide} containerStyle={{ paddingBottom: 5 }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'black'
                }}
                inactiveDotStyle={{}}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: bg
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    lessonNumber: {
        color: fg,
        fontSize: 22,
        fontWeight: "700"
    },
    lessonTitle: {
        color: fg,
        fontSize: 18,
    }
})

export default LessonPage