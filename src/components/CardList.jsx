import {TouchableOpacity, Image, View, Text} from 'react-native'

const CardList = ({image, title, raiting, item, navigation}) => {
  return (
    <TouchableOpacity className="w-1/2 my-2">
      <Image
        source={{uri: image}}
        className="w-full h-40 rounded-md object-cover"
      />
      {title ? (
        <>
          <Text className="absolute text-base text-white p-2">{title}</Text>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  )
}

export default CardList
