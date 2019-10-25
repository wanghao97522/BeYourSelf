import axios from 'axios'
import qs from 'querystring'

export default {
  http: ({method, url, data}) => {
    console.log(data);
        
    return axios({
      method,
      url,
      data: data? qs.stringify(data) : '',
      header:{
        "content-type":"application/x-www-form-urlencoded;charset=UTF-8"
      }
    }).then(result => result.data)
  }
}