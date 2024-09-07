import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const AppLog = (): React.JSX.Element => {
    return (
        <View>
            <Image
                source={require('../assets/tni_logo.png')}
                resizeMode='cover'
                style={styles.Logo}
            />
        </View>
    )
}

export default AppLog

const styles = StyleSheet.create({
    Logo: {
        width: 70,
        height: 50
    }
})