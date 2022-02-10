import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Lesson } from "./lessons";

export type RootStackParamList = {
    Home: undefined;
    Lesson: Lesson & { lessonNumber: number, topic: string },
    About: undefined
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LessonProps = NativeStackScreenProps<RootStackParamList, 'Lesson'>;