import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { useAppSelector } from '../hooks/useAppSelector'

type ILockScreenProps = {
    setLocked: (value: boolean) => void
}

const LockScreen = ({ setLocked }: ILockScreenProps) => {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text>Lock screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
})

export default LockScreen