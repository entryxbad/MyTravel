const url =
  'https://travel-advisor.p.rapidapi.com/hotels/list?location_id=293919&adults=1&rooms=1&nights=2&offset=0&currency=USD&order=asc&limit=30&sort=recommended&lang=en_US'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '797d18dc4bmshbce9903b38ac1e7p19bc3ejsn5d37e735f837',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
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
