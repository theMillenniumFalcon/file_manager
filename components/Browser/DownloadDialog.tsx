import React, { useState } from 'react'
import Dialog from 'react-native-dialog'
import { useAppSelector } from '../../hooks/useAppSelector'

type DownloadDialogProps = {
    visible: boolean
    handleDownload: (name: string) => void
    setDownloadDialog: (visible: boolean) => void
}

export const DownloadDialog = ({
    visible,
    handleDownload,
    setDownloadDialog,
}: DownloadDialogProps) => {
    const [downloadUrl, setDownloadUrl] = useState('')
    const { colors } = useAppSelector((state) => state.theme.theme)
    return (
        <Dialog.Container
            contentStyle={{ backgroundColor: colors.background2 }}
            visible={visible}
        >
            <Dialog.Title style={{ color: colors.primary }}>
                Enter Download URL
            </Dialog.Title>
            <Dialog.Input
                style={{ color: colors.primary } as any}
                value={downloadUrl}
                onChangeText={(text: React.SetStateAction<string>) => setDownloadUrl(text)}
            ></Dialog.Input>
            <Dialog.Button
                label="Cancel"
                onPress={() => {
                    setDownloadDialog(false)
                    setDownloadUrl('')
                }}
            />
            <Dialog.Button
                label="OK"
                onPress={() => {
                    handleDownload(downloadUrl)
                    setDownloadDialog(false)
                    setDownloadUrl('')
                }}
            />
        </Dialog.Container>
    )
}