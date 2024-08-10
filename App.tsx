
import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import Newsapp from './components/NewsApp'
const App = (): React.JSX.Element => {
    return (
        <View>
            {/* <UseEffectExample /> */}
            {/* <FlastListExample/> */}
            {/* <FlatListcallBackend/> */}
            <Newsapp/>
        </View>
    )
}
export default App