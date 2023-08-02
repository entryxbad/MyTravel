import CardList from '../components/CardList'
import {fetchData} from '../config/api'
import {useState, useEffect} from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native'
import {BellIcon} from 'react-native-heroicons/outline'
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import {FunnelIcon} from 'react-native-heroicons/outline'
import {BellSlashIcon} from 'react-native-heroicons/solid'

const HomeScreen = ({navigation}) => {
  const [isPressed, setIsPressed] = useState(false)
  const [mainData, setMainData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
      .then(response => {
        setMainData(response.data)
        setIsLoading(false)
        console.log('mainData', response.data)
      })
      .catch(error => {
        console.log('Error from useEffect', error)
      })
  }, [])

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
      <View className="mx-4 mt-5 pb-10">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-black text-lg font-semibold">Recommended</Text>
          <FunnelIcon size={25} color={'#28303F'} />
        </View>

        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          <View className="flex-row flex-wrap justify-between items-center ">
            {!isLoading || mainData.length > 0 ? (
              mainData.data.map((item, index) => (
                <CardList
                  key={index}
                  image={item.heroImgUrl}
                  title={item.name}
                  rating={item.averageRating}
                  item={item}
                  navigation={navigation}
                />
              ))
            ) : (
              <Text>Loading...</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen
