import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Constants from 'expo-constants'
import { StackScreenProps } from '@react-navigation/stack'

import { useAppSelector } from '../hooks/useAppSelector'
import { SIZE } from '../utils/Constants'

type BrowserParamList = {
    Browser: { prevDir: string; folderName: string }
}

type IBrowserProps = StackScreenProps<BrowserParamList, 'Browser'>

const Browser = ({ route }: IBrowserProps) => {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Text>Browser page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SIZE,
        paddingTop: Constants.statusBarHeight,
    },
})

export default Browser