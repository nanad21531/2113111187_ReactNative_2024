
import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
const App = (): React.JSX.Element => {
    return (
        <View>
            {/* <UseEffectExample /> */}
            <FlastListExample/>
            <FlatListcallBackend/>
        </View>
    )
}
export default App