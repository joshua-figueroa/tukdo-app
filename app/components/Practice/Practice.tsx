import { useNavigation } from '@react-navigation/native';
import _ from 'lodash';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Overlay, Button } from 'react-native-elements';
import { fg, overlayBG } from '../../config/theme';
import { LessonProps } from '../../model/navigation';
import { BigText } from '../Text/Text';

type Prop = { givenAnswer: string[], lessonNumber: number, lessonTitle: string, placeholder: string, multiple?: boolean }

const Practice: React.FC<Prop> = ({ givenAnswer, lessonNumber, lessonTitle, placeholder, multiple = false }) => {
    const [answer, setAnswer] = useState<string>();
    const [successVisible, setSuccessVisible] = useState(false)
    const [failureVisible, setFailureVisible] = useState(false)
    const navigation = useNavigation<LessonProps['navigation']>();

    const correctAll = () => {
        const correctAnswers = answer!.replace(/\s/g, '').split(",")
        return _.isEqual(correctAnswers, givenAnswer);
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                style={{
                    flex: 1,
                    height: 40,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                    marginRight: 15,
                    borderColor: fg,
                    color: fg
                }}
                placeholder={placeholder}
                onChangeText={(text) => setAnswer(text)}
                value={answer}
            />
            <Button
                title="Submit"
                containerStyle={{
                    width: 80
                }}
                onPress={() => {
                    if (correctAll()) setSuccessVisible(true);
                    else setFailureVisible(true)
                }}
            />
            <Overlay isVisible={successVisible} overlayStyle={{ padding: 20, backgroundColor: overlayBG }}>
                <BigText>
                    Congratulations! 🎉
                </BigText>
                <BigText>
                    You completed Lesson {lessonNumber}: {lessonTitle}
                </BigText>
                <Button
                    title="Go to Main Panel"
                    onPress={() => navigation.navigate("Home")}
                    buttonStyle={{ marginTop: 20 }}
                />
            </Overlay>
            <Overlay isVisible={failureVisible} overlayStyle={{ padding: 20, width: 300, backgroundColor: overlayBG }}>
                <BigText>
                    {multiple && "Some Answers are "}Wrong! ❌
                </BigText>
                <BigText>
                    Please try again
                </BigText>
                <Button
                    title="Go back"
                    onPress={() => setFailureVisible(false)}
                    buttonStyle={{ marginTop: 20 }}
                />
            </Overlay>
        </View>
    )
}

export default Practice