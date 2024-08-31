import { View, Text } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExampl from './components/UseEffectExampl'
import FlastListExample from './components/FlastListExample'
import FlatListcallBackend from './components/FlatListcallBackend'
import NewsApp from './components/NewsApp'
import AxiosgetData from './components/AxiosgetData'
import AxiosPostData from './components/AxiosPostData'
import WeatherLondon from './components/WeatherLondon'
import WeatherBangkok from './components/WeatherBangkok'
import ModelExample from './components/ModelExample'
import WeatherApp from './components/WeatherApp'
import AboutScreen from './screens/AboutScreen'


const App = ():React.JSX.Element => {
  return (
    <View>
      {/* <ProfileScreen/>       */}
      {/* <FlastListExample/> */}
      {/* <FlatListcallBackend/> */}
      {/* <NewsApp/> */}
      {/* <AxiosgetData/> */}
      {/* <AxiosPostData/> */}
      {/* <WeatherLondon/> */}
      {/* <ModelExample/> */}
      {/* <WeatherApp/> */}
      <AboutScreen/>
    </View>
  )
}

export default App