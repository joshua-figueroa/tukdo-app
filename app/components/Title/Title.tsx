import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { Icon } from 'react-native-elements';
import { fg } from '../../config/theme';

type Props = {
    openDrawer: () => void
}

const Title: React.FC<Props> = ({ openDrawer }) => (
    <View style={styles.container}>
        <View>
            <Text style={styles.greetingTitle}>Choose what</Text>
            <Text style={styles.greetingSubtitle}>to learn today?</Text>
        </View>

        <TouchableOpacity
            onPress={openDrawer}
        >
            <Icon
                name='menu-outline'
                type='ionicon'
                color={fg}
                tvParallaxProperties={undefined}
            />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20
    },
    greetingTitle: {
        fontSize: 35,
        color: fg
    },
    greetingSubtitle: {
        fontSize: 35,
        fontWeight: '700',
        color: fg
    },
});

export default Title;
