import CardList from '../components/CardList'
import {useState} from 'react'
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native'
import {BellIcon} from 'react-native-heroicons/outline'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {BellSlashIcon} from 'react-native-heroicons/solid'

const HomeScreen = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <View className="flex-1 relative bg-slate-300">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-4 mx-4">
        {/* Avatar */}
        <View className="flex-row">
          <Image source={require('../assets/images/avatar.png')} />

          {/* Text */}
          <View className="ml-5">
            <Text className="text-black text-xl tracking-widest">
              Hi Ninejoe
            </Text>
            <Text className="text-[#636773]">You are looking for a trip?</Text>
          </View>
        </View>

        {/* Icon */}
        {isPressed ? (
          <TouchableOpacity onPress={() => setIsPressed(false)}>
            <BellSlashIcon size={25} color={'#28303F'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsPressed(true)}>
            <BellIcon size={25} color={'#28303F'} />
          </TouchableOpacity>
        )}
      </View>

      {/* Search */}
      <View className="flex-row items-center mx-4 mt-6">
        <View className="absolute z-10 p-2">
          <MagnifyingGlassIcon size={35} color={'#B3B4BA'} />
        </View>
        <TextInput
          placeholder="Search"
          className="bg-white w-full rounded-lg text-lg text-[#B3B4BA] pl-12 font-semibold"
        />
      </View>

      {/* Card list */}
      <CardList />
    </View>
  )
}

export default HomeScreen
