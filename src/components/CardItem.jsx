import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import {ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/outline'
import {MapPinIcon} from 'react-native-heroicons/outline'
import {StarIcon} from 'react-native-heroicons/solid'
import HTML from 'react-native-render-html'

const CardItem = ({route, navigation}) => {
  const data = route.params
  const windowWidth = useWindowDimensions().width

  return (
    <View className="flex-1 relative">
      <ScrollView className="flex-1">
        {/* Image section */}
        <View className="relative">
          <Image
            source={{uri: data.params.heroImgUrl}}
            className="w-full h-72 object-cover rounded-b-3xl"
          />

          {/* Buttons section */}
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              className="bg-white rounded-full p-3">
              <ChevronLeftIcon size={25} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-full p-3">
              <HeartIcon size={25} color={'black'} />
            </TouchableOpacity>
          </View>

          {/* Descriptio section */}
          <View className="flex-1 p-3">
            {/* Header description */}
            <View className="space-y-2">
              <Text className="text-black text-3xl font-bold">
                {data.params.name}
              </Text>
              <View className="flex-1 flex-row items-center space-x-1">
                <MapPinIcon size={25} color={'black'} />
                <Text>{data.params.parentGeoName}</Text>
              </View>
              <View className="flex-1 flex-row items-center space-x-1">
                <StarIcon size={25} color={'#2894D1'} />
                <Text>{data.params.averageRating}</Text>
              </View>
            </View>

            {/* Details description */}
            <View className="mt-5">
              <Text className="font-bold text-2xl text-black">Review</Text>
              <View className="mt-2">
                {data.params.reviewSnippets.reviewSnippetsList.map(
                  (item, index) => (
                    <>
                      <HTML
                        key={index}
                        source={{html: item.reviewText}}
                        contentWidth={windowWidth}
                      />
                    </>
                  ),
                )}
              </View>
              <TouchableOpacity className="flex-1 items-center bg-[#2894D1] p-8 rounded-3xl mt-5">
                <Text className="text-white font-bold text-2xl">
                  Find a place to stay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default CardItem
