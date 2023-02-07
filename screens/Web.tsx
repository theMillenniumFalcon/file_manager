import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { useAppSelector } from '../hooks/useAppSelector'

const Web: React.FC = () => {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text>Web screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
})

export default Web