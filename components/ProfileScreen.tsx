import { StyleSheet, Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from '../components/styles'
const ProfileScreen = (): React.JSX.Element => {


    return (
        <View style={styles.container}>    
            <View style={styles.profileContainer}>
             <Image style={styles.profileImage} source={require("../assets/nanad.png")} />
              <Text style={styles.profileName}>Boriboon Srianekratha</Text>


            </View>
        </View>
    )
}

export default ProfileScreen


 

