import CardItem from './CardItem'
import {View, Text} from 'react-native'
import {FunnelIcon} from 'react-native-heroicons/outline'

const CardList = () => {
  return (
    <View className="flex-1 mx-4 mt-5">
      <View className="flex-row justify-between items-center">
        <Text className="text-black text-lg font-semibold">Recommended</Text>
        <FunnelIcon size={25} color={'#28303F'} />
      </View>
      <CardItem />
    </View>
  )
}

export default CardList
