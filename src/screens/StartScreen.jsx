import {View, Text, Image, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'

const StartScreen = ({navigation}) => {
  return (
    <View className="flex-1 relative">
      <Image
        source={require('../assets/images/bg_home.png')}
        className="absolute w-full h-full"
      />

      {/* Header text */}
      <View className="items-center top-3">
        <Text className="text-black text-4xl font-bold">Travel</Text>
        <Text className="text-black text-lg font-bold">
          You are looking for a trip
        </Text>
      </View>

      {/* Button */}
      <View className="flex-1 items-center justify-end">
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="items-center justify-center rounded-[100px] w-40 h-20 border-l-2 border-r-2 border-t-4 border-orange-400 mb-5">
          <Animatable.View
            animation={'pulse'}
            easing={'ease-in-out'}
            iterationCount={'infinite'}
            className="bg-orange-400 rounded-full w-36 h-16 items-center justify-center">
            <Text className="text-4xl text-white tracking-widest">
              Let's go
            </Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StartScreen
