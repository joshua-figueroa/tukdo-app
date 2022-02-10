import React from "react"
import { StyleSheet, Text, TextStyle } from "react-native"
import { fg, textGray } from "../../config/theme"

type Prop = {
    style?: TextStyle
}

export const SmallText: React.FC<Prop> = ({ children, style }) => <Text style={[styles.smallText, style]}>{children}</Text>
export const BigText: React.FC<Prop> = ({ children, style }) => <Text style={[styles.bigText, style]}>{children}</Text>
export const MidText: React.FC<Prop> = ({ children, style }) => <Text style={[styles.midText, style]}>{children}</Text>
export const NormalText: React.FC<Prop> = ({ children, style }) => <Text style={[styles.normalText, style]}>{children}</Text>
export const Italic: React.FC<Prop> = ({ children, style }) => <Text style={[styles.italicText, style]}>{children}</Text>
export const Strong: React.FC<Prop> = ({ children, style }) => <Text style={[{ fontWeight: 'bold' }, style]}>{children}</Text >

const styles = StyleSheet.create({
    bigText: {
        fontSize: 16,
        color: fg,
        fontWeight: "500",
        marginBottom: 5
    },
    midText: {
        fontSize: 14,
        color: fg,
        fontWeight: "500",
        marginBottom: 5
    },
    normalText: {
        fontSize: 14,
        color: textGray,
        marginBottom: 5
    },
    smallText: {
        fontSize: 14,
        color: textGray,
        marginBottom: 15
    },
    italicText: {
        fontSize: 12,
        color: fg,
        fontStyle: "italic"
    }
})