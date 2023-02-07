import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { StackScreenProps } from "@react-navigation/stack"
import { SafeAreaView } from 'react-native-safe-area-context'
import Constants from 'expo-constants'

import { useAppSelector } from '../hooks/useAppSelector'

type VideoViewParamList = {
    VideoPlayer: { prevDir: string; folderName: string }
}

type Props = StackScreenProps<VideoViewParamList, 'VideoPlayer'>

export default function VideoPlayer({ route }: Props) {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <SafeAreaView
            style={{ ...styles.container, backgroundColor: colors.background }}
        >
            <Text>Video player</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
})