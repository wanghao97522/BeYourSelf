import axios  from 'axios'

export default{
    // postData({url="",data={}}){
    //     return axios({
    //         method:'POST',
    //         url,
    //         data,
    //     })
    //         .then(res=>{
    //             return res.data
    //         })

    // },

    // {
    //     method:'POST',
    //     url,
    //     headers:{
    //         'Content-Type':'multipart/form-data'
    //     },
    //     data
    // }
    postFile(url){
        console.log(url);
        return axios(url)
        .then(res=>{
            return res.data
        })
    },
    postData(url){
        return axios(url)
        .then(res=>{
            return res.data
        })
    },
    getDATA({url}){
        return axios(url,{
            method:'GET',
        })
        .then(res=>{
            return res
        })
    }
}