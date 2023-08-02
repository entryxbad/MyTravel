import {TouchableOpacity, Image, View, Text} from 'react-native'
import {StarIcon} from 'react-native-heroicons/solid'

const CardList = ({image, title, rating, item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Card', {params: item})}
      className="w-1/2 rounded-md p-1">
      <Image
        source={{uri: image}}
        className="w-full h-40 rounded-md object-cover bg-black opacity-90"
      />
      {title ? (
        <>
          <Text className="absolute text-base text-white p-2">
            {title.length > 23 ? `${title.slice(0, 17)}...` : title}
          </Text>
          <View className="absolute flex-row space-x-1 bg-white rounded-2xl p-1 px-2 opacity-90 mt-10 ml-3">
            <StarIcon size={18} color={'#2894D1'} />
            <Text className="text-[#2894D1] text-sm">{rating}</Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  )
}

export default CardList
