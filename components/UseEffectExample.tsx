import { View, Text, Button, Image, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { stylesLogin } from "./styles";

const UseEffectExample = (): React.JSX.Element => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [name, setName] = useState("Boriboon Srianekratha");
    const [image, setImage] = useState(require("../assets/nanad.png"));

    useEffect(() => {
        console.log("use Effect1 = Runs after every render")
    });

    useEffect(() => {
        console.log("use Effect2 - Runs only when count1 changes")
    }, [count1]);

    useEffect(() => {
        console.log("Use Effact 3")
    }, []);

    const handleChangeName = () => {
        setName(name == "Boriboon Srianekratha" ? "No name" : "Boriboon Srianekratha");
    }
    const handleChangeimage = () => {
        setImage(image == require("../assets/cat.jpg") ? require("../assets/nanad.png") : require("../assets/cat.jpg"));
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
            <View style={stylesLogin.container}>
                <Text>{"\n"}</Text>
                
                <TextInput
                    style={stylesLogin.input}
                    
                    
                    placeholder="Enter your Name"
                    
                //  placeholder="Enter your Email"
                //  Button title="SUBMIT" 
                />
                <TextInput
                    style={stylesLogin.input}
                    
                    
                    placeholder="Enter your Email"
                    

                />
            <Button title='submit'/>
            </View>

        </View>
    )




    // return (
    //     <View style={{ marginTop: 50 }}>
    //         <Text style={{ marginTop: 50 }}>Count1: {count1}</Text>
    //         <Button title="Increment Count1" onPress={() => setCount1(count1 + 1)} />
    //         <Text>{"\n\n"}</Text>
    //         <Text>Count2: {count2}</Text>
    //         <Button title="Increment Count2" onPress={() => setCount2(count2 + 1)} />
    //     </View>
    // );
}


export default UseEffectExample