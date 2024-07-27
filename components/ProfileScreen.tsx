import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
const ProfileScreen = (): React.JSX.Element => {

    const [name, setName] = useState("Boriboon Srianekratha");
    const [image, setImage] = useState(require("../assets/nanad.png"));

    const handleChangeName = () => {
        setName("New Name");

    }
    const handleChangeimage = () => {
        setImage(require("../assets/cat.jpg"));

    }



    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>

                <Image style={styles.profileImage} source={image} />
                <View>
                    <Text style={styles.profileName}>{name}</Text>
                    <Button title='ChangeName' onPress={handleChangeName} />
                    <Text>{"\n"}</Text>
                    <Button title='Changeimage' onPress={handleChangeimage} />
                </View>

            </View>
        </View>
    )
}

export default ProfileScreen




