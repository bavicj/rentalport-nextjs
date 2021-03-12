import Axios from 'axios'

export const BASE_URL = 'https://rentalport.com/'

const api = Axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: false,
  })


export const getPlaces = () => api.post('index.php?apt=ajax&ajax=get_places&component=com_rentacar')

export const fetcher = (url) => api.get(url);

export const ffetcher = (url) => fetch(url).then((r) => r.json());