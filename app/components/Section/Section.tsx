import React from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { bg, fg, gray } from '../../config/theme';

type Prop = {
    title: string,
    active: boolean,
    onPress: (event: GestureResponderEvent) => void
}

const Section: React.FC<Prop> = ({ title, active, onPress }) => (
    <Button
        title={title}
        buttonStyle={{
            backgroundColor: active ? fg : gray,
            borderRadius: 30,
            height: 50,
            paddingVertical: 0
        }}
        containerStyle={{
            width: 165
        }}
        titleStyle={{ fontWeight: '700', fontSize: 18, color: active ? bg : 'black' }}
        onPress={onPress}
    />
)

export default Section