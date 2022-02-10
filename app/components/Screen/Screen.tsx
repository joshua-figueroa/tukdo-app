import React from "react";
import { SafeAreaView, useColorScheme, StatusBar } from "react-native";
import { bg } from "../../config/theme";

const Screen: React.FC<{}> = ({ children }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView
            style={{ backgroundColor: bg }}
        >
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            {children}
        </SafeAreaView>
    );
}

export default Screen
