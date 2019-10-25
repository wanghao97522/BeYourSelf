import React, { Component } from 'react';

import { PersonalDataContainer } from './styledPersonalData'
import personalPhotoBG from 'assets/images/profile/touxiang-gerenziliao@2x.png'

import { DatePicker } from 'antd-mobile';

import { Toast } from 'antd-mobile';

// import querystring from 'querystring'

// import httpGET from 'utils/http'
import http from 'utils/httpgg'

class PersonalData extends Component {
    constructor(){
        super()
        this.input=React.createRef();
        this.formDate=null
    }

    state={
        isShowMask:false,
        netName:'小镇青年',
        isShowContentNetName:false,
        isShowContentSex:false,
        nowSex:0,
        birthday:'选择生日',
        persoalPhoto:personalPhotoBG,
    }


    render() {
        return (
            <PersonalDataContainer isShowMask={this.state.isShowMask} isShowContentNetName={this.state.isShowContentNetName} isShowContentSex={this.state.isShowContentSex}>
                <header>
                    <div className='back' onClick={()=>this.goback()}>
                    </div>
                    <h2>个人资料</h2>    
                </header>
                <nav>
                    <ul>
                        <li className="photo">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>头像</h3>
                                <div className='personalPhotoBG'>
                                    <input type="file" name='uploadname' onChange={()=>this.updatePhoto()}  accept='image/*'  id="photo" />
                                    <img src={this.state.persoalPhoto} alt=""/>
                                </div>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="netname" onClick={()=>this.changeNetNameMask()}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>昵称</h3>
                                <h4  onClick={()=>this.changeNetNameMask()}>{this.state.netName}</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="sex">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>性别</h3>
                                <h4 onClick={()=>this.changeSexMask()}>{this.state.nowSex===0?'男':'女'}</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="birth">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>生日</h3>
                                <DatePicker
                                    mode="date"
                                    title="选择生日"
                                    onChange={date => this.changeDate(date)}
                                    >
                                        <h4>{this.state.birthday}</h4>
                                    {/* <List.Item arrow="horizontal"></List.Item> */}
                                </DatePicker>
                            </div>
                            <div className="right_jt"></div>

                        </li>
                    </ul>
                </nav>
                <div className="mask">
                    <div className="blackBG" onClick={()=>this.changIsShow()}></div>
                    <div className="content-netName">
                        <div className="data">
                            <input type="text" defaultValue={this.state.netName} ref={this.input}/>
                        </div>
                        <div className='submit'>
                            <span onClick={()=>this.changIsShow()}>取消</span>
                            <span onClick={()=>this.changeNetName()}>确定</span>
                        </div>
                    </div>
                    <div className="content-sex">
                        <div className={this.state.nowSex===0?'boy active':'boy'}>
                            <div>男</div>
                            <div onClick={()=>this.pickSex(0)}>
                                <div></div>
                            </div>
                        </div>
                        <div className={this.state.nowSex===1?'girl active':'girl'}>
                            <div>女</div>
                            <div onClick={()=>this.pickSex(1)}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>  
            </PersonalDataContainer>
        );
    }

    goback(){
        this.props.history.goBack()
        // console.log(this.props);
    }

    async componentDidMount(){
        // console.log(http.getDATA);
        const uId = localStorage.getItem('uId')
        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})
        let data = result.data.obj
        this.setState({
            persoalPhoto:data.mImg,
            netName:data.mNickname,
            nowSex:data.mSex,
            birthday:data.mBirthday

        })
    }

    async updatePhoto(){
        let imgFile = document.querySelector('#photo').files

        let file = imgFile[0]

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file) //读取图片
        // fileReader.addEventListener('load',()=> {
        //     // 读取完成
        //     let res = fileReader.result
        //     // res是base64格式的图片
        //     this.setState({
        //         persoalPhoto:res
        //     })
        // })

        const uId = localStorage.getItem('uId')

        const formDate = new FormData()
        formDate.append('uploadname', file)
        formDate.append('uId', uId)


        let resultPOST =await http.postFile({
            url:'/api/mine/updateMine',
            method:'POST',
            data:formDate
        })

        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})
        let imgUrl = result.data.obj.mImg

        this.setState({
            persoalPhoto:imgUrl
        })
        Toast.success('上传成功', 1);
    }

    changIsShow(){
        this.setState((prev)=>({
            isShowMask:!prev.isShowMask,
            isShowContentNetName:false,
            isShowContentSex:false
        }))
    }

    changeNetNameMask(){
        this.setState({
            isShowMask:true,
            isShowContentNetName:true,
        })
    }

    async changeNetName(){
        const uId = localStorage.getItem('uId')

        this.setState({
            isShowMask:false,
            isShowContentNetName:false,
            // netName:this.input.current.value
        })

        let netName = this.input.current.value

        let imgFile = document.querySelector('#photo').files

        let file = imgFile[0]
        const formDate = new FormData()
        formDate.append('uploadname',file)
        formDate.append('uId', uId)
        formDate.append('mNickname', netName)
        
        let resultPOST = await http.postFile({
            url:'/api/mine/updateMine',
            method:'POST',
            data:formDate
        })
        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})

        let data = result.data.obj
        console.log(data);

        this.setState({
            netName:data.mNickname
        })
        Toast.success('上传成功', 1);

    }

    changeSexMask(){
        this.setState({
            isShowMask:true,
            isShowContentSex:true
        })
    }

    async pickSex(sex){
        const uId = localStorage.getItem('uId')
        this.setState({
            // nowSex:sex,
            isShowMask:false,
            isShowContentSex:false
        })

        let imgFile = document.querySelector('#photo').files

        let file = imgFile[0]
        const formDate = new FormData()
        formDate.append('uploadname',file)
        formDate.append('uId', uId)
        formDate.append('mSex', sex)
        
        let resultPOST = await http.postFile({
            url:'/api/mine/updateMine',
            method:'POST',
            data:formDate
        })
        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})

        let data = result.data.obj

        this.setState({
            nowSex:data.mSex
        })
        Toast.success('上传成功', 1);

    }

    async changeDate(date){
        console.log(1111);
        const uId = localStorage.getItem('uId')
        var birthday = this.format(date, 'yyyy.MM.dd');
        // this.setState({
        //     birthday:birthday
        // })

        let imgFile = document.querySelector('#photo').files

        let file = imgFile[0]
        const formDate = new FormData()
        formDate.append('uploadname',file)
        formDate.append('uId', uId)
        formDate.append('mBirthday', birthday)
        
        let resultPOST = await http.postFile({
            url:'/api/mine/updateMine',
            method:'POST',
            data:formDate
        })
        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})
        let data = result.data.obj

        this.setState({
            birthday:data.mBirthday
        })
        Toast.success('上传成功', 1);

    }

    // changePhoto(){
    //     let clickThis = this
    //     window.wx.ready(function(){
    //         window.wx.chooseImage({
    //             count: 1, // 默认9
    //             sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //             sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //             success: function (res) {
    //                 var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //                 console.log(localIds);
    //                 clickThis.setState({
    //                     persoalPhoto:localIds
    //                 })
    //             },
    //         });
    //     })
    // }

    format(time, format){
            var t = new Date(time);
            var tf = function(i){return (i < 10 ? '0' : '') + i};
            return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
                switch(a){
                    case 'yyyy':
                        return tf(t.getFullYear());
                    case 'MM':
                        return tf(t.getMonth() + 1);
                    case 'mm':
                        return tf(t.getMinutes());
                    case 'dd':
                        return tf(t.getDate());
                    case 'HH':
                        return tf(t.getHours());
                    case 'ss':
                        return tf(t.getSeconds());
                    default:
                        return 0;
                }
            })
    }

}

export default PersonalData;