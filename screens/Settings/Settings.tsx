import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { useAppSelector } from '../../hooks/useAppSelector'

function Settings() {
    const { theme } = useAppSelector((state) => state.theme)

    return (
        <View
            style={[styles.container, { backgroundColor: theme.colors.background }]}
        >
            <Text>Setting page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
})

export default Settings