import Axios from 'axios'
import qs from 'qs'

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

export const postFetcher = (url) => api.post(url);

export const ffetcher = (url) => fetch(url).then((r) => r.json());

export const initSearch = (data) =>
  api.get('/index.php+?lang=sk', {
    params: {
      ajax: 'search',
      apt: 'ajax',
      ...data,
      LastSearchID: 'PWx54oDZ3xotzGjtLG3G',
      UserID: 'GhyUU0yLrhfZtmWkoRbGmOjoGJE3',
      discount_code: '',
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    },
  })

export default api