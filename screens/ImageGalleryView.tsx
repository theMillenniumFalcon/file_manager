import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { useAppSelector } from '../hooks/useAppSelector'

type FileViewParamList = {
    ImageGalleryView: { prevDir: string; folderName: string }
}

type Props = StackScreenProps<FileViewParamList, 'ImageGalleryView'>

const ImageGalleryView = ({ route }: Props) => {
    const { colors } = useAppSelector((state) => state.theme.theme)

    return (
        <View style={{ ...styles.container, backgroundColor: colors.background }}>
            <Text>Image gallery view</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default ImageGalleryView