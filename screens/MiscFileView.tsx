import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Constants from 'expo-constants'

import { useAppSelector } from '../hooks/useAppSelector'
import { StackScreenProps } from '@react-navigation/stack'

type MiscFileViewParamList = {
    MiscFileView: { prevDir: string; folderName: string }
}

type Props = StackScreenProps<MiscFileViewParamList, 'MiscFileView'>

const MiscFileView = ({ route }: Props) => {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Text style={{ color: colors.primary }}>
                This file format is not supported.
            </Text>
        </View>
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

export default MiscFileView