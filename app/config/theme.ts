import { Appearance } from "react-native";

const dark = Appearance.getColorScheme() === "dark"

const bg = dark ? "black" : 'white'
const fg = dark ? "white" : 'black'
const gray = dark ? '#565656' : '#C4C4C4'
const textGray = dark ? "#999999" : "#525252"
const overlayBG = dark ? "#474747" : '#fff'

export { dark, bg, fg, gray, textGray, overlayBG }