import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native';
import Math, { BigMathText, SmallMathText } from "../components/Math/Math"
import { Table, Rows, Row } from 'react-native-table-component';
import { BigText, SmallText, Strong, Italic, MidText, NormalText } from '../components/Text/Text';
import YoutubePlayer from "react-native-youtube-iframe";
import Practice from '../components/Practice/Practice';
import { Image } from 'react-native-elements';
import { bg, fg } from '../config/theme';

type Prop = {
    id: string,
    items: JSX.Element[]
}
type TableCell = string | number
type TableRow = [TableCell, TableCell]

const styles = StyleSheet.create({
    wrapper: { flexDirection: 'column' },
    head: { backgroundColor: "#c7dbf0" },
    text: { margin: 6, color: fg },
    borderStyle: { borderWidth: 1, borderColor: fg },
    tableStyle: { margin: 15 },
    tableHeadStyle: { margin: 6, color: bg }
})

const YouTube: React.FC<{ id: string }> = ({ id }) => {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("Video has finished playing!");
        }
    }, []);

    return (
        <YoutubePlayer
            height={220}
            play={playing}
            videoId={id}
            onChangeState={onStateChange}
        />
    )
}

const DataTable: React.FC<{ head: string[], body: TableRow[] }> = ({ head, body }) => (
    <Table borderStyle={styles.borderStyle} style={styles.tableStyle}>
        <Row data={head} style={styles.head} textStyle={styles.tableHeadStyle} />
        <Rows data={body}
            textStyle={styles.text} />
    </Table>
)

const LessonList: Prop[] = [
    {
        id: "q9jvf6wr2",
        items: [
            <View>
                <BigText>Key Definition</BigText>
                <SmallText>Limits are the foundation of calculus. They are required for in-depth analysis of change. The variable can only have values that are extremely close to the constant, but it cannot be equal to the constant. The limit, on the other hand, will be able to clearly describe what is happening to the function near that constant.</SmallText>
                <BigText>Formula</BigText>
                <Math>
                    {`$$f(x) = L$$`}
                </Math>
                <SmallText>
                    This equation above can be read as <Strong>The Limit of f(x) as x approaches c is L</Strong>
                </SmallText>
                <BigText>Example & Explanation</BigText>
                <Math>
                    {`$$(1+3x) = 7$$`}
                </Math>
                <SmallText>
                    Here,<SmallMathText>{` $$f(x) = 1 + 3x$$ `}</SmallMathText>and the constant , which x will approach, is 2. To evaluate the given, we will use a table to keep the effect as x approaches towards 2 will have on f(x). The x may approach in 2 ways, through its left value or through its right value.
                </SmallText>
                <Italic>
                    Remember: The values to be chosen should be close to the number.
                </Italic>
            </View>,
            <View>
                <DataTable head={["x", "f(x)"]} body={[
                    [1.9, 6.7],
                    [1.99, 6.97],
                    [1.999, 6.997],
                    [1.9999, 6.9997],
                    [2, "-"],
                    [2.0001, 7.0003],
                    [2.001, 7.003],
                    [2.01, 7.03],
                    [2.1, 7.3],
                ]} />
                <SmallText>As the values of x gets closer to 2, the values of f(x) get closer to 7. Therefore in symbol</SmallText>
                <Math>
                    {`$$(1+3x) = 7$$`}
                </Math>
                <Math>
                    {`$$
                    f(x)= \\begin{cases}
                    x+1 & \\text {if} x\\lt4 \\\\
                    (x-4)^2 & \\text {if} x\\geq4
                    \\end{cases}
                    $$`}
                </Math>
                <SmallText>Although the appearance is different, the logic and procedure are identical. We can still approach the constant 4 from the left and right, but we must evaluate the appropriate functional expression. In this case, the values taken should be substituted in <SmallMathText>{`$$f(x) = x + 1$$`}</SmallMathText> when x approaches 4 from the left.</SmallText>
            </View>,
            <View>
                <DataTable head={["x", "f(x)"]} body={[
                    [3.9, 4.9],
                    [3.99, 4.99],
                    [3.999, 4.999],
                    [3.9999, 4.9999],
                    [4, "-"],
                    [4.0001, 3.0000001],
                    [4.001, 3.000001],
                    [4.01, 3.0001],
                    [24.1, 3.01],
                ]} />
                <SmallText>
                    The values that f(x) approaches are unequal, the value of f(x) as it approaches from left is 5 while it approaches 3 from the right. In this case, we can say that the limit of the given function does not exist <Strong>(DNE)</Strong>. In symbol:
                </SmallText>
                <Math>
                    {`$$f(x)\\ DNE$$`}
                </Math>
            </View>,
            <View>
                <BigText>Practice Test</BigText>
                <SmallText>Find the limit of a given function</SmallText>
                <Math>{`$$(x^2-2x+4)$$`}</Math>
                <Practice lessonNumber={1} lessonTitle='Limit of a Function' givenAnswer={['3']} placeholder='answer' />
            </View>
        ]
    },
    {
        id: "j1m5lwoa",
        items: [
            <View>
                <BigText>Key Definition</BigText>
                <SmallText>Limit theorems are used for evaluating the limits of algebraic functions.</SmallText>
                <BigText>Formula (1)</BigText>
                <Math>{`$$k = k$$`}</Math>
                <MidText>Examples:</MidText>
                <SmallText>5 = 5{'                       '}800 = 800</SmallText>
                <BigText>Formula (2)</BigText>
                <Math>{`$$k = c$$`}</Math>
                <MidText>Examples:</MidText>
                <SmallText>x = 6{'                       '}x = -9</SmallText>
                <BigText>Formula (3)</BigText>
                <Math>
                    {`$$f(x) = L, \\text {and} g(x) = M$$`}
                </Math>
                <SmallText>Assume that the limits of f and g both exist as x approaches c and that they are L and M, respectively.</SmallText>
                <BigText>a. Constant Multiple Theorem</BigText>
                <SmallText>The limit of a multiple of a function is simply that multiple of the limit of the function.</SmallText>
                <Math>
                    {`$$8 \\cdot f(x) = 8 \\cdot f(x) =8 \\cdot 4=32$$`}
                </Math>
            </View>,
            <View>
                <BigText>b. Addition Theorem</BigText>
                <SmallText>The limit of a sum of function is the sum of the limits of the individual functions. Subtraction is also included in this law, that is, the limit of a difference of functions is the difference of their limits.</SmallText>
                <Math>
                    {`$$(f(x)+g(x))=f(x)+ g(x)=L+M$$`}
                </Math>
                <Math>
                    {`$$(f(x)-g(x))=f(x)-g(x)=L–M$$`}
                </Math>
                <MidText>Examples:</MidText>
                <MidText>
                    If <SmallMathText>{`$$f(x)=4$$`}</SmallMathText> and <SmallMathText>{`$$g(x)=5$$`}</SmallMathText>, then
                </MidText>
                <Math>
                    {`$$(f(x)+g(x))=f(x)+g(x)=4+5=9$$`}
                </Math>
                <Math>
                    {`$$(f(x)-g(x))=f(x)-g(x)=4–5=-1$$`}
                </Math>
                <BigText>c. Multiplication Theorem</BigText>
                <SmallText>It is similar to Addition Theorem, but the operation involved are replaced. Thus, limit of a product of functions is equal to the product of their limits.</SmallText>
                <Math>
                    {`$$(f(x) \\cdot g(x)) = f(x) \\cdot g(x)=4 \\cdot 5=20$$`}
                </Math>

                {/*  */}

                <MidText>Example:</MidText>
                <MidText>
                    If <SmallMathText>{`$$f(x)=4$$`}</SmallMathText> and <SmallMathText>{`$$g(x)=5$$`}</SmallMathText>, then
                </MidText>
                <Math>
                    {`$$(f(x) \\cdot g(x)) = f(x) \\cdot g(x)=4 \\cdot 5=20$$`}
                </Math>
            </View>,
            <View>
                <BigText>c. Division Theorem</BigText>
                <SmallText>The limit of a quotient of a function is equal to the quotient of the limits of the individual functions, provided the denominator is not equal to 0.</SmallText>
                <Math>
                    {`$$\\frac{f(x)}{g(x)} = \\frac{L}{M}, M\ \\ne 0$$`}
                </Math>
                <MidText>Example:</MidText>
                <MidText>
                    If <SmallMathText>{`$$f(x)=3$$`}</SmallMathText> and <SmallMathText>{`$$g(x)=-4$$`}</SmallMathText>, then
                </MidText>
                <Math>
                    {`$$\\frac{f(x)}{g(x)} = \\frac{1}{-4} = -\\frac{1}{4}$$`}
                </Math>
                <MidText>
                    If <SmallMathText>{`$$f(x)=2$$`}</SmallMathText> and <SmallMathText>{`$$g(x)=0$$`}</SmallMathText>, it is not possible to evaluate. We may say that the limit Does not exist (DNE)
                </MidText>
                <BigText>c. Power Theorem</BigText>
                <SmallText>The limit of an integer power p of a function is just that power of the limit of the function.</SmallText>
                <Math>
                    {`$$(f(x))^p = L^p$$`}
                </Math>
                <MidText>Example:</MidText>
                <MidText>
                    If <SmallMathText>{`$$f(x)=4$$`}</SmallMathText>, then
                </MidText>
                <Math>
                    {`$$(f(x))^{-2} = 4^{-2} = \\frac{1}{16}$$`}
                </Math>
            </View>,
            <View>
                <BigText>Limits of Algebraic Function</BigText>
                <MidText>A. Polynomial Function</MidText>
                <SmallText>Determine <SmallMathText>{`$$(2x+1)$$`}</SmallMathText></SmallText>
                <Math>{`$$=2x+1$$`}</Math>
                <Math>{`$$=(2x)+1$$`}</Math>
                <Math>{`$$=2(1)+1$$`}</Math>
                <Math>{`$$=2+1$$`}</Math>
                <Math>{`$$=3$$`}</Math>
                <MidText>B. Rational Function</MidText>
                <SmallText>Evaluate <SmallMathText>{`$$\\frac{x}{x+1}$$`}</SmallMathText></SmallText>
                <SmallText>Solution: we start checking the limit of the polynomial function in the denominator.</SmallText>
                <Math>{`$$=x+1=2+1=3$$`}</Math>
                <Math>{`$$\\frac{x}{x+1}=\\frac{x}{(x+1)}=\\frac{2}{3}$$`}</Math>
            </View>,
            <View>
                <MidText>C. Radical Function</MidText>
                <SmallText>Evaluate <SmallMathText>{`$$^3\\sqrt{x^2+3x-6}$$`}</SmallMathText></SmallText>
                <Math>{`$$^3\\sqrt{x^2+3x-6}$$`}</Math>
                <Math>{`$$=\\ ^3\\sqrt{(x^2+3x-6)}$$`}</Math>
                <Math>{`$$=\\ ^3\\sqrt{(-2)^2+3(-2)-6}$$`}</Math>
                <Math>{`$$=\\ ^3\\sqrt{4+6-6}$$`}</Math>
                <Math>{`$$=\\ ^3\\sqrt{-8}$$`}</Math>
                <Math>{`$$=-2$$`}</Math>
            </View>,
            <View>
                <BigText>Practice Test</BigText>
                <SmallText>Evaluate the following limits:</SmallText>
                <Math>{`$$1.\\ x^2+2x+1$$`}</Math>
                <Math>{`$$2.\\ 3x^4+9x^2$$`}</Math>
                <Math>{`$$3.\\ 3x$$`}</Math>
                <Math>{`$$4.\\ \\sqrt{3x^2-2x+8}$$`}</Math>
                <Math>{`$$5.\\ 3x^4-2x^2+10x-1$$`}</Math>
                <Practice lessonNumber={2} lessonTitle='Limit Laws' givenAnswer={['66', '334', '-6', '1', '57']} placeholder="separate answers w/ comma" multiple />
            </View>
        ]
    },
    {
        id: "abn9sp98",
        items: [
            <View>
                <BigText>Key Definition</BigText>
                <SmallText>Functional relationships can be used to describe real-world situations. Mathematical models are used to describe these functional relationships. It is critical to be able to generate these mathematical models in calculus applications.</SmallText>
                <BigText>Exponential Functions</BigText>
                <Math>{`$$f(x) = b^x \\ or \\ f(x) = e^x$$`}</Math>
                <MidText>where <SmallMathText>{`$$b > 0$$`}</SmallMathText> and <SmallMathText>{`$$b \\ne 1$$`}</SmallMathText> and x is a real number</MidText>
                <SmallText>We first consider the natural exponential function <SmallMathText>{`$$f(x) = e^x$$`}</SmallMathText>, where e is called Euler number, and 2.718281828 is the value.</SmallText>
                <MidText>Evaluate <BigMathText>{`$$e^x$$`}</BigMathText></MidText>
                <SmallText>Let’s construct first the table of values for <SmallMathText>{`$$f(x) = e^x$$`}</SmallMathText>. We start by approaching 0 from left or through the values less but close to 0, and then approach from its right or through values greater than 0 but close to 0.</SmallText>
                <DataTable head={["x", "f(x)"]} body={[
                    [-1, 0.36787944117],
                    [-0.5, 0.60653065971],
                    [-0.3, 0.90483741803],
                    [-0.01, 0.99004983374],
                    [-0.001, 0.99900049983],
                    [-0.0001, 0.999900049983],
                    [-0.00001, 0.99999000005]
                ]} />
            </View>,
            <View>
                <DataTable head={["x", "f(x)"]} body={[
                    [1, 2.71828182846],
                    [0.5, 1.6487212707],
                    [0.3, 1.10517091808],
                    [0.01, 1.01005016708],
                    [0.001, 1.00100050017],
                    [0.0001, 1.000100005],
                    [0.00001, 1.00001000005]
                ]} />
                <MidText style={{ alignSelf: "center" }}>Therefore, <BigMathText>{`$$e^x = 1$$`}</BigMathText></MidText>
                <MidText style={{ marginTop: 10 }}>Evaluate <BigMathText>{`$$3^x$$`}</BigMathText></MidText>
                <SmallText>Construct a table of values. Since <SmallMathText>{`$$x → +\\infty$$`}</SmallMathText>, let x take on the number -3, -1, 0, 1, 3, 5 and so on.</SmallText>
                <DataTable head={["x", "f(x)"]} body={[
                    [-3, 0.037],
                    [-1, 0.3],
                    [0, 1],
                    [1, 3],
                    [3, 27],
                    [5, 243],
                    [7, 2187],
                    [9, 19683]
                ]} />
            </View>,
            <View>
                <SmallText>The graph passes through (0,1). As x approaches positive infinity, the graph increases without bound. In the table of values, as the values of x increases, the values of f(x) also increase too. This means as <SmallMathText>{`$$x → +\\infty$$`}</SmallMathText>, 3x approaches <SmallMathText>{`$$+\\infty$$`}</SmallMathText> too.</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_3_Image_1.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
                <BigText>Logarithmic Functions</BigText>
                <SmallText>We now consider the common logarithmic function <SmallMathText>{`$$f(x) = \\log_{10} x$$`}</SmallMathText>. Recall that <SmallMathText>{`$$f(x) = \\log_{10} x = \\log x$$`}</SmallMathText></SmallText>
                <MidText>Evaluate <BigMathText>{`$$\\log x$$`}</BigMathText></MidText>
                <SmallText>We will construct first the table of values for <SmallMathText>{`$$\\log x$$`}</SmallMathText>. We first approach by 0 from left or through the values less but close to 0, and then approach from its right or through values greater than 0 but close to 0.</SmallText>
                <DataTable head={["x", "f(x)"]} body={[
                    [-1, -1],
                    [-0.5, -0.30102999566],
                    [0.9, -0.04575749056],
                    [0.99, -0.004364805],
                    [0.999, -0.00043451177],
                    [0.9999, -0.00004343161],
                    [0.99999, -0.00000434296]
                ]} />
            </View>,
            <View>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["x", "f(x)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [2, 0.30102999566],
                        [1.5, 0.17609125905],
                        [1.1, 0.041392685156],
                        [1.01, 0.00432137378],
                        [1.001, 0.00043407747],
                        [1.0001, 0.00004342727],
                        [1.00001, 0.00000434292]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <MidText style={{ alignSelf: "center" }}>Therefore, <BigMathText>{`$$\\log x = 0$$`}</BigMathText></MidText>
                <BigText style={{ marginTop: 15 }}>Trigonometric Functions</BigText>
                <MidText>Evaluate <SmallMathText>{`$$\\sin{x}$$`}</SmallMathText></MidText>
                <SmallText>We will construct the table of values. The values of x must be in radians. We first approach by 0 from left or through the values less but close to 0, and then approach from its right or through values greater than 0 but close to 0.</SmallText>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["x", "f(x)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [-1, -1],
                        [-0.5, -0.30102999566],
                        [-0.3, -0.04575749056],
                        [-0.01, -0.004364805],
                        [-0.001, -0.00043451177],
                        [-0.0001, -0.00004343161],
                        [-0.00001, -0.00000434296]
                    ]}
                        textStyle={styles.text} />
                </Table>
            </View>,
            <View>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["x", "f(x)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [1, 0.30102999566],
                        [0.5, 0.17609125905],
                        [0.3, 0.041392685156],
                        [0.01, 0.00432137378],
                        [0.001, 0.00043407747],
                        [0.0001, 0.00004342727],
                        [0.00001, 0.00000434292]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <MidText style={{ alignSelf: "center" }}>Therefore, <BigMathText>{`$$\\sin x = 0$$`}</BigMathText></MidText>
                <BigText style={{ marginTop: 15, marginBottom: 15 }}>Some Special Limits</BigText>
                <MidText>Evaluate <SmallMathText>{`$$\\frac{\\sin t}{t}$$`}</SmallMathText></MidText>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["t", "f(t)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [-1, 0.84147099848],
                        [-0.5, 0.9588510772],
                        [-0.01, 0.9983341665],
                        [-0.001, 0.9999833334],
                        [-0.0001, 0.9999998333],
                        [-0.00001, 0.99999999983]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["t", "f(t)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [1, 0.84147099848],
                        [0.5, 0.9588510772],
                        [0.01, 0.9983341665],
                        [0.001, 0.9999833334],
                        [0.0001, 0.9999998333],
                        [0.00001, 0.99999999983]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <MidText style={{ alignSelf: "center" }}>Therefore, <BigMathText>{`$$\\frac{\\sin t}{t} = 1$$`}</BigMathText></MidText>
                <SmallText>The graph of <SmallMathText>{`$$\\frac{\\sin t}{t}$$`}</SmallMathText> below confirms that the y-values approach 1 as t approaches 0</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_3_Image_2.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 2.75,
                        width: '100%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5,
                    }}
                />
            </View>,
            <View>
                <MidText>Let’s now try to evaluate <SmallMathText>{`$$\\frac{1 - \\cos t}{t}$$`}</SmallMathText></MidText>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["t", "f(t)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [-1, 0.6321205588],
                        [-0.5, 0.7869386806],
                        [-0.01, 0.9516258196],
                        [-0.001, 0.9950166251],
                        [-0.0001, 0.9995001666],
                        [-0.00001, 0.9999500016]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["t", "f(t)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [1, 0.9999500016],
                        [0.5, 1.297442541],
                        [0.01, 1.051709181],
                        [0.001, 1.005016708],
                        [0.0001, 1.000500167],
                        [0.00001, 1.000050002]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <MidText style={{ alignSelf: "center" }}>Therefore, <BigMathText>{`$$\\frac{1 - \\cos t}{t} = 1$$`}</BigMathText></MidText>
                <SmallText>Below the graph of <SmallMathText>{`$$\\frac{1 - \\cos t}{t}$$`}</SmallMathText>, we see that the y-values approaches as t tends to 0</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_3_Image_3.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 2.75,
                        width: '100%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5,
                    }}
                />
            </View>,
            <View>
                <MidText>Evaluate <SmallMathText>{`$$\\frac{e^t - 1}{t}$$`}</SmallMathText></MidText>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["t", "h(t)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [-1, 0.6321205588],
                        [-0.5, 0.7869386806],
                        [-0.01, 0.9516258196],
                        [-0.001, 0.9950166251],
                        [-0.0001, 0.9995001666],
                        [-0.00001, 0.9999500016]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <Table borderStyle={{ borderWidth: 1 }} style={{ marginBottom: 15 }}>
                    <Row data={["t", "f(t)"]} style={styles.head} textStyle={styles.text} />
                    <Rows data={[
                        [1, 1.718281828],
                        [0.5, 1.297442541],
                        [0.01, 1.051709181],
                        [0.001, 1.005016708],
                        [0.0001, 1.000500167],
                        [0.00001, 1.000050002]
                    ]}
                        textStyle={styles.text} />
                </Table>
                <MidText style={{ alignSelf: "center" }}>Therefore, <BigMathText>{`$$\\frac{e^t - 1}{t} = 1$$`}</BigMathText></MidText>
                <SmallText>The graph of <SmallMathText>{`$$h(t) = \\frac{e^t - 1}{t}$$`}</SmallMathText> below confirms that the equation is true</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_3_Image_4.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 2.75,
                        width: '100%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5,
                    }}
                />
            </View>
        ]
    },
    {
        id: "uqa8m9qq",
        items: [
            <View>
                <BigText>Key Definition</BigText>
                <SmallText>In calculus, a function is continuous at x = a if - and only if - all three of the following conditions are met:</SmallText>
                <NormalText>1. The function is defined at x = a; that is, f(a) equals a real number</NormalText>
                <NormalText>2. The limit of the function as x approaches a exists</NormalText>
                <NormalText>3. The limit of the function as x approaches a is equal to the function value at x = a</NormalText>
                <BigText style={{ marginTop: 15, marginBottom: 15 }}>Basic types of Discontinuities</BigText>
                <NormalText>1. Removable (point) discontinuity</NormalText>
                <NormalText>2. Infinite discontinuity</NormalText>
                <NormalText>3. Jump discontinuity</NormalText>
                <MidText style={{ marginTop: 15, marginBottom: 10 }}>Example Using Graphs</MidText>
                <SmallText>Let's go through some examples using this graph to represent the function of f(x):</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_4_Image_1.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginVertical: 10,
                        borderRadius: 5
                    }}
                />
            </View>,
            <View>
                <MidText style={{ marginBottom: 10 }}>Example 1</MidText>
                <SmallText>Is f(x) continuous at x = 0?</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_4_Image_2.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
                <MidText style={{ marginBottom: 15 }}>To check for continuity at x = 0, we check the three conditions:</MidText>
                <NormalText>1. Is the function defined at x = 0? Yes, f(0) = 2</NormalText>
                <NormalText>2. Does the limit of the function as x approaches 0 exist? Yes</NormalText>
                <NormalText>3. Does the limit of the function as x approaches 0 equal the function value at x = 0? Yes</NormalText>
                <MidText style={{ marginTop: 15 }}>Since all three conditions are met, f(x) is continuous at x = 0.</MidText>
            </View>,
            <View>
                <MidText style={{ marginBottom: 10 }}>Example 2</MidText>
                <SmallText>Is f(x) continuous at x = -4?</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_4_Image_3.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
                <MidText style={{ marginBottom: 15 }}>To check for continuity at x = -4, we check the same three conditions:</MidText>
                <NormalText>1. The function is defined; f(-4) = 2</NormalText>
                <NormalText>2. The limit exists</NormalText>
                <NormalText>3. The function value does not equal the limit; point discontinuity at x = 4</NormalText>
                <MidText style={{ marginTop: 15 }}>Continuity over an Interval</MidText>
                <SmallText>
                    Now that we have explored the concept of continuity at a point, we extend that idea to<Strong>continuity over an interval</Strong>. As we develop this idea for different types of intervals, it may be useful to keep in mind the intuitive idea that a function is continuous over an interval if we can use a pencil to trace the function between any two points in the interval without lifting the pencil from the paper. In preparation for defining continuity on an interval, we begin by looking at the definition of what it means for a function to be continuous from the right at a point and continuous from the left at a point.
                </SmallText>
            </View>,
            <View>
                <SmallText>
                    A function ƒ is continuous over the open interval (a,b) if and only if it's continuous on every point in (a,b). ƒ is continuous over the closed interval [a,b] if and only if it's continuous on (a,b), the right-sided limit of ƒ at x=a is ƒ(a) and the left-sided limit of ƒ at x=b is ƒ(b).
                </SmallText>
                <SmallText>To learn about the continuity over an interval, watch the video below:</SmallText>
                <YouTube id="ENIQiqxFpBc" />
                <MidText>Continuity from the right and from the left</MidText>
                <NormalText>1. A function <SmallMathText>{`$$f(x)$$`}</SmallMathText> is said to be <Strong>continuous from the right</Strong> at <SmallMathText>{`$$a$$`}</SmallMathText> if:</NormalText>
                <Math>{`$$\\lim_{x \\to a^+} \\ f(x) = f(a)$$`}</Math>
                <NormalText>2. A function <SmallMathText>{`$$f(x)$$`}</SmallMathText> is said to be <Strong>continuous from the left</Strong> at <SmallMathText>{`$$a$$`}</SmallMathText> if:</NormalText>
                <Math>{`$$\\lim_{x \\to a^-} \\ f(x) = f(a)$$`}</Math>
            </View>
        ]
    },
    {
        id: 'ep9ndhtd',
        items: [
            <View>
                <BigText>Key Definition</BigText>
                <SmallText>When a function is not continuous at a point, then we can say it is discontinuous at that point. There are several types of behaviours that lead to discontinuities.</SmallText>
                <BigText>Three basic types of discontinuities:</BigText>
                <NormalText>1. Removable (point) discontinuity - the graph has a hole at a single x-value. Imagine you're walking down the road, and someone has removed a manhole cover (Careful! Don't fall in!). This function will satisfy condition #2 (limit exists) but fail condition #3 (limit does not equal function value).</NormalText>
                <NormalText>2. Infinite discontinuity - the function goes toward positive or negative infinity. Imagine a road getting closer and closer to a river with no bridge to the other side</NormalText>
                <NormalText>3. Jump discontinuity - the graph jumps from one place to another. Imagine a superhero going for a walk: he reaches a dead end and, because he can, flies to another road.</NormalText>
                <SmallText style={{ marginTop: 15 }}>Both infinite and jump discontinuities fail condition #2 (limit does not exist), but how they fail is different. Recall for a limit to exist, the left and right limits must exist (be finite) and be equal. Infinite discontinuities have infinite left and right limits. Jump discontinuities have finite left and right limits that are not equal.</SmallText>
                <BigText>Examples</BigText>
                <SmallText>A <Strong>removable discontinuity</Strong> exists when the limit of the function exists, but one or both of the other two conditions is not met. The graphical feature that results is often colloquially called a hole. The first graph below shows a function whose value at   x=cx=c   is not defined. The second graph below shows a function which has both a limit and a value at   x=cx=c,   but the two values are not equal. This type of function is frequently encountered when trying to find slopes of tangent lines.</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_5_Image_1.gif")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
            </View>,
            <View>
                <SmallText>An <Strong>infinite discontinuity</Strong> exists when one of the one-sided limits of the function is infinite. In other words,<SmallMathText>{`$$\\lim_{x \\to c^+} \\ f(x) = \\infty$$`}</SmallMathText>, or one of the other three varieties of infinite limits.</SmallText>
                <SmallText>If the two one-sided limits have the same value, then the two-sided limit will also exist. Graphically, this situation corresponds to a vertical asymptote. Many rational functions exhibit this type of behaviour.</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_5_Image_2.gif")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
                <SmallText>A <Strong>finite discontinuity</Strong> exists when the two-sided limit does not exist, but the two one-sided limits are both finite, yet not equal to each other. The graph of a function having this feature will show a vertical gap between the two branches of the function. The function <SmallMathText>{`$$f(x)= \\frac{|x|}{x}$$`}</SmallMathText>
                    has this feature. The graph below is of a generic function with a finite discontinuity.
                </SmallText>
                <Image
                    source={require("./assets/limits/Lesson_5_Image_3.gif")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
            </View>
        ]
    },
    {
        id: 'cbs3fu69',
        items: [
            <View>
                <BigText>Key Definition</BigText>
                <BigText>Intermediate Value Theorem</BigText>
                <SmallText>The idea behind the Intermediate Value Theorem is this:</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_6_Image_1.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
                <SmallText>When we have <Strong>two points</Strong> connected by a continuous curve:</SmallText>
                <NormalText>    •   one point below the line</NormalText>
                <NormalText>    •   the other point above the line</NormalText>
                <SmallText>... then there will be <Strong>at least one place</Strong> where the curve crosses the line!</SmallText>
                <SmallText>Here is the Intermediate Value Theorem stated more formally:</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_6_Image_2.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
            </View>,
            <View>
                <NormalText>When:</NormalText>
                <NormalText>    •   The curve is the function y = f(x),</NormalText>
                <NormalText>    •   which is continuous on the interval [a, b],</NormalText>
                <SmallText>    •   and w is a number between f(a) and f(b)</SmallText>
                <SmallText>Then there must be at least one value <Strong>c</Strong> within [a, b] such that <Strong>f(c) = w</Strong></SmallText>
                <NormalText>In other words the function y = f(x) at some point must be w = f(c), notice that:</NormalText>
                <NormalText>    •   <Strong>w</Strong> is between f(a) and f(b), which leads to ...</NormalText>
                <SmallText>    •   <Strong>c</Strong> must be between a and b</SmallText>
                <SmallText>It also says "at least one value c", which means we could have more. Here, for example, are 3 points where f(x)=w:</SmallText>
                <Image
                    source={require("./assets/limits/Lesson_6_Image_3.jpeg")}
                    PlaceholderContent={<ActivityIndicator />}
                    containerStyle={{
                        aspectRatio: 1,
                        width: '70%',
                        flex: 1,
                        alignSelf: "center",
                        marginBottom: 15,
                        borderRadius: 5
                    }}
                />
                <MidText>How Is This Useful?</MidText>
                <SmallText>Whenever we can show that:</SmallText>
                <NormalText>    •   there is a point above some line</NormalText>
                <NormalText>    •   and a point below that line, and</NormalText>
                <SmallText>    •   that the curve is continuous,</SmallText>
                <NormalText>we can then safely say "yes, there is a value somewhere in between that is on the line".</NormalText>
            </View>,
            <View>
                <BigText>Example:</BigText>
                <NormalText>Is there a solution to <SmallMathText>{`$$x^5-2x^3-2=0$$`}</SmallMathText> between x=0 and x=2?</NormalText>
                <NormalText><Strong>At x = 0:</Strong></NormalText>
                <Math>{`$$0^5-2×0^3-2 = -2$$`}</Math>
                <NormalText><Strong>At x = 2:</Strong></NormalText>
                <Math>{`$$2^5-2×2^3-2=14$$`}</Math>
                <SmallText>Now we know:</SmallText>
                <NormalText>    •   at x=0, the curve is below zero</NormalText>
                <SmallText>    •   at x=2, the curve is above zero</SmallText>
                <SmallText>And, being a polynomial, the curve will be continuous, so <Strong>somewhere in between</Strong> the curve must cross through y=0</SmallText>
                <SmallText>Yes, there is a solution to <SmallMathText>{`$$x^5-2x^3-2=0$$`}</SmallMathText> in the interval [0, 2]</SmallText>
                <YouTube id="9xgO-EJ3sr0" />
            </View>,
            <View>
                <BigText>Extreme Value Theorem</BigText>
                <SmallText>The Extreme value theorem states that if a function is continuous on a closed interval [a,b], then the function must have a maximum and a minimum on the interval. This makes sense: when a function is continuous you can draw its graph without lifting the pencil, so you must hit a high point and a low point on that interval.</SmallText>
                <SmallText>This theorem tells us that we don't have to worry about whether absolute maxima or minima occur, just about where they are. This may seem obvious, but the theorem does not apply when the function is discontinuous (what is the maximum value of 1/x1/x on [−1,1][−1,1]?) or when the interval isn't closed (what is the maximum value of f(x)=1/xf(x)=1/x on (0,1)(0,1)?).</SmallText>
                <SmallText>Watch the video below to understand Extreme Value Theorem</SmallText>
                <YouTube id="JmxwD7a7s0o" />
            </View>
        ]
    },
    {
        id: "ui0ajkda",
        items: [
            <View></View>
        ]
    },
    {
        id: "nelgdgiw",
        items: [
            <View></View>
        ]
    },
    {
        id: "b7rjn659",
        items: [
            <View></View>
        ]
    }
]

export default LessonList