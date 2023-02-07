import React from 'react'
import { Text, View } from 'react-native'

import { useAppSelector } from '../hooks/useAppSelector'

export default function Main() {
    const { theme } = useAppSelector((state: { theme: any }) => state.theme)

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Text>Main screen</Text>
        </View>
    )
}