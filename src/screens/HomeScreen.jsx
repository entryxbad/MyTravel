import {useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {BellIcon} from 'react-native-heroicons/outline'
import {BellAlertIcon} from 'react-native-heroicons/solid'

const HomeScreen = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <View className="flex-1 relative bg-slate-300">
      {/* Header */}
      <View className="flex-row justify-between items-center mx-4 mt-4">
        {/* Avatar */}
        <View className="flex-row">
          <Image source={require('../assets/images/avatar.png')} />

          {/* Text */}
          <View className="ml-5">
            <Text className="text-black text-xl">Hi Ninejoe</Text>
            <Text className="text-[#636773]">You are looking for a trip?</Text>
          </View>
        </View>

        {/* Icon */}
        {isPressed ? (
          <TouchableOpacity onPress={() => setIsPressed(false)}>
            <BellAlertIcon size={25} color={'black'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsPressed(true)}>
            <BellIcon size={25} color={'#28303F'} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default HomeScreen
