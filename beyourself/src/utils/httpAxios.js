import axios from 'axios'
import qs from 'querystring'

export default {
  http: ({method, url, data}) => {
    return axios({
      method,
      url,
      data: data? qs.stringify(data) : ''
    }).then(result => result.data)
  }
}