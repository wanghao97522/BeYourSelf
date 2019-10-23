import React, { Component } from 'react';

import { PersonalDataContainer } from './styledPersonalData'
import personalPhotoBG from 'assets/images/profile/touxiang-gerenziliao@2x.png'

import { DatePicker } from 'antd-mobile';

// import httpGET from 'utils/http'
import httpPOST from 'utils/httpgg'

class PersonalData extends Component {
    constructor(){
        super()
        this.input=React.createRef();
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
                                    <input type="file" onChange={()=>this.updatePhoto()}  accept='image/*'  id="photo" />
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

    updatePhoto(){
        let imgFile = document.querySelector('#photo').files

        let file = imgFile[0]

        let name = file.name

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file) //读取图片
        fileReader.addEventListener('load',()=> {
            // 读取完成
            let res = fileReader.result
            // res是base64格式的图片
            this.setState({
                persoalPhoto:res
            })
        })

        const formDate = new FormData()
        formDate.append('userPicture', file, '1.jpg')


        let resultPOST = httpPOST.postFile({
            url:'',
            data:{
                uId:'',
                uploadname:''
            }
        })
        let result = httpPOST.getDATA({
            url:'',
            data:{}
        })

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

    changeNetName(){
        // console.log(this.input.current.value);
        this.setState({
            isShowMask:false,
            isShowContentNetName:false,
            netName:this.input.current.value
        })
        let resultPOST = httpPOST.postFile({
            url:'',
            data:{
                uId:'',
                mNickname:'',
                uploadname:''
            }
        })
        let result = httpPOST.getDATA({
            url:'',
            data:{}
        })
    }

    changeSexMask(){
        this.setState({
            isShowMask:true,
            isShowContentSex:true
        })
    }

    pickSex(sex){
        this.setState({
            nowSex:sex,
            isShowMask:false,
            isShowContentSex:false
        })

        let resultPOST = httpPOST.postFile({
            url:'',
            data:{
                uId:'',
                mSex:'',
                uploadname:''
            }
        })
        let result = httpPOST.getDATA({
            url:'',
            data:{}
        })
    }

    changeDate(date){
        var birthday = this.format(date, 'yyyy.MM.dd');
        this.setState({
            birthday:birthday
        })

        let resultPOST = httpPOST.postFile({
            url:'',
            data:{
                uId:'',
                mBirthday:'',
                uploadname:''
            }
        })
        let result = httpPOST.getDATA({
            url:'',
            data:{}
        })
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