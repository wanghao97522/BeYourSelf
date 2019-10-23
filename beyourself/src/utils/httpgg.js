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
    postFile({url,data}){
        axios({
        method:'POST',
        url,
        headers:{
            'Content-Type':'multipart/form-data'
        },
        data
    })
        .then(res=>{
            return res.data
        })
    },
    postData({url,data}){
        axios({
        method:'POST',
        url,
        data
    })
        .then(res=>{
            return res.data
        })
    },
    getDATA({url,data}){
        axios({
            method:'GET',
            url,
            data
        })
        .then(res=>{
            return res
        })
    }
}