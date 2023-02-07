import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { useAppSelector } from '../hooks/useAppSelector'

const FileTransfer: React.FC = () => {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: colors.primary
                }}
            >
                Socket Status:
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        padding: 10,
    },
})

export default FileTransfer