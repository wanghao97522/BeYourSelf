import styled from 'styled-components'

import back from 'assets/images/profile/fanhui@2x.png'

import photoBG from 'assets/images/profile/touxiang-icon@2x.png'
import netnameBG from 'assets/images/profile/nicheng-icon@2x.png'
import sexBG from 'assets/images/profile/xingbie-icon@2x.png'
import birthBG from 'assets/images/profile/jiangli@2x.png'

import jiantou from 'assets/images/profile/jiantou@2x.png'

const PersonalDataContainer = styled.div`
    header{
        padding:0 .15rem;
        height: .44rem;
        background:#fff;
        display:flex;
        align-items:center;
        .back{
            width:.13rem;
            height:.22rem;
            background:url(${back}) no-repeat center;
            background-size:100% 100%;
        }
        h2{
            flex:1;
            text-align:center;
            font-size:.18rem;
            line-height:.25rem;
            color:#333;
            font-weight:700;
        }
    }
    nav{
        ul{
            li{
                padding:0 .15rem;
                height: .8rem;
                width:100%;
                margin-top:.1rem;
                background:#fff;
                display:flex;
                align-items:center;
                .txt{
                    margin-left:.1rem;
                    flex:1;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding-right:.1rem;
                    h3{
                        font-size:.16rem;
                        line-height:.22rem;
                        height: .22rem;
                        color:#333;
                        font-weight:normal;
                    }
                    h4{
                        font-size:.12rem;
                        line-height:.17rem;
                        color:#999;
                        font-weight:normal;
                    }
                }
                .right_jt{
                    width:.08rem;
                    height: .14rem;
                    background:url(${jiantou}) no-repeat center;
                    background-size:100% 100%;
                }
            }
            .photo{
                .bg_icon{
                    width:.18rem;
                    height: .21rem;
                    background:url(${photoBG}) no-repeat center;
                    background-size:100% 100%;
                }
                .txt{
                    .personalPhotoBG{
                        width:.4rem;
                        height: .4rem;
                        img{
                            width:100%;
                            height: 100%;
                        }
                    }
                }
            }
            .netname{
                .bg_icon{
                    width:.22rem;
                    height: .22rem;
                    background:url(${netnameBG}) no-repeat center;
                    background-size:100% 100%;
                }
            }
            .sex{
                .bg_icon{
                    width:.22rem;
                    height: .22rem;
                    background:url(${sexBG}) no-repeat center;
                    background-size:100% 100%;
                }
            }
            .birth{
                .bg_icon{
                    width:.22rem;
                    height: .22rem;
                    background:url(${birthBG}) no-repeat center;
                    background-size:100% 100%;
                }
            }
        }
    }
`





export {
    PersonalDataContainer
}