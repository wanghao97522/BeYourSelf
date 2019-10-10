import styled from 'styled-components'

import touxiangBG from 'assets/images/profile/touxiang-background@2x.png'
import touxiang from 'assets/images/profile/touxiang@2x.png'
import quanbuLC from 'assets/images/profile/quanbu-lucheng@2x.png'
import denglu from 'assets/images/profile/denglu@2x.png'
import shezhi from 'assets/images/profile/shezhi@2x.png'
import huiyuan from 'assets/images/profile/huiyuan@2x.png'
import jiangli from 'assets/images/profile/jiangli@2x.png'
import jiantou from 'assets/images/profile/jiantou@2x.png'

const ProfileContainer = styled.div`
    header{
        height:1.6rem;
        width:100%;
        background:url(${touxiangBG}) no-repeat center;
        background-size:100% 100%;
        /* position: relative; */
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .profile_photo{
            width:.6rem;
            height:.6rem;
            background:url(${touxiang}) no-repeat center;
            background-size:100% 100%;
            /* position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom:0;
            margin:auto; */
        }
        h3{
            width:100%;
            font-size:.16rem;
            color:white;
            font-weight:500;
            margin-top:.1rem;
            text-align:center;
        }
    }
    .banner{
        height:1.24rem;
        width:100%;
        background:white;
        padding-top:.1rem;
        .secret{
            height: .6rem;
            width:3.45rem;
            margin-left:.15rem;
            position: relative;
            img{
                width:100%;
                height: 100%;
            }
            h3{
                position: absolute;
                top:.08rem;
                left: .12rem;
                color:#fff;
                font-size:.16rem;
                font-weight:600;
                line-height:.25rem;
            }
            h4{
                position: absolute;
                left: .12rem;
                top:.32rem;
                font-size:.12rem;
                color:#fff;
                line-height:.17rem;
                font-weight:300;
            }
            span{
                position: absolute;
                bottom:.19rem;
                right: .2rem;
                font-size:.16rem;
                line-height:.22rem;
                color:#fff;
            }
        }
        .all_travel{
            width:100%;
            height: .5rem;
            /* margin-top:.1rem; */
            display:flex;
            padding:0 .15rem;
            display:flex;
            align-items:center;
            .bg_icon{
                width:.16rem;
                height: .24rem;
                background:url(${quanbuLC}) no-repeat center;
                background-size:100% 100%;
                margin-left: .04rem;
            }
            .txt{
                font-size:.16rem;
                line-height:.22rem;
                height: .22rem;
                margin-left:.1rem;
                color:#333;
                flex:1;
            }
            .right_jt{
                width:.08rem;
                height: .14rem;
                background:url(${jiantou}) no-repeat center;
                background-size:100% 100%;
            }
        }
    }
    nav{
        ul{
            li{
                padding:0 .15rem;
                height: .5rem;
                width:100%;
                margin-top:.1rem;
                background:#fff;
                display:flex;
                align-items:center;
                .txt{
                    margin-left:.1rem;
                    flex:1;
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
            .login,.setting{
                .bg_icon{
                    width:.22rem;
                    height: .22rem;
                    background:url(${denglu}) no-repeat center;
                    background-size:100% 100%;
                }
            }
            .setting{
                .bg_icon{
                    background:url(${shezhi}) no-repeat center;
                    background-size:100% 100%;
                }
            }
            .vip{
                .txt{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding-right:.1rem;
                }
                .bg_icon{
                    width:.24rem;
                    height: .21rem;
                    background:url(${huiyuan}) no-repeat center;
                    background-size:100% 100%;
                }
            }
            .my_award{
                .bg_icon{
                    width:.22rem;
                    height: .22rem;
                    background:url(${jiangli}) no-repeat center;
                    background-size:100% 100%;
                }
            }
        }
    }
`

export {
    ProfileContainer
}