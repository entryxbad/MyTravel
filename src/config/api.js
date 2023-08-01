const url =
  'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304554'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '797d18dc4bmshbce9903b38ac1e7p19bc3ejsn5d37e735f837',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
  },
}

export const fetchData = async () => {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      const errorMessage = `Response status: ${response.status} - ${response.statusText}`
      throw new Error(errorMessage)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log('Error from fetchData', error)
    throw error
  }
}
