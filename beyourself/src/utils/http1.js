import axios from 'axios';
export default{
    post:(url)=>{
        return axios(url)
            .then(response=>{
                return response.data
            })
    }
}
