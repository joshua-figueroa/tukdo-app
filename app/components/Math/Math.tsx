import React from 'react';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import { fg } from '../../config/theme';

const Math: React.FC<{}> = ({ children }) => (
    // @ts-ignore
    <MathJaxSvg
        fontSize={16}
        color={fg}
        fontCache
        style={{ alignSelf: "center", paddingVertical: 20, marginBottom: 5 }}
    >
        {children}
    </MathJaxSvg>
)

const SmallMathText: React.FC<{}> = ({ children }) => (
    // @ts-ignore
    <MathJaxSvg
        fontSize={14}
        color={fg}
        fontCache={false}
    >
        {children}
    </MathJaxSvg>
)

const BigMathText: React.FC<{}> = ({ children }) => (
    // @ts-ignore
    <MathJaxSvg
        fontSize={16}
        color={fg}
        fontCache={false}
    >
        {children}
    </MathJaxSvg>
)

export { SmallMathText, BigMathText }
export default Math