import styled from 'styled-components'
import backImg from 'assets/images/profile/vip/fh@2x.png'


import jiantou from 'assets/images/profile/vip/jrzfqh@2x.png'
import monthBG from 'assets/images/profile/vip/zfxz@2x.png'

const VipContainer = styled.div`
    height:100%;
    background:#fff;
    header{
        padding:0 .15rem;
        height: .44rem;
        background:#fff;
        display:flex;
        align-items:center;
        .back{
            width:.13rem;
            height:.22rem;
            background:url(${backImg}) no-repeat center;
            background-size:100% 100%;
        }
        h2{
            flex:1;
            text-align:center;
            font-size:.18rem;
            line-height:.25rem;
            color:#333;
        }
    }
    .banner{
        padding:0 .15rem;
        position: relative;
        height: 1.53rem;
        >img{
            height: 100%;
            width:100%;
        }
        .personal{
            width:.6rem;
            height:.6rem;
            position: absolute;
            left:.45rem;
            top:.16rem;
            img{
                width:100%;
                height:100%;
                border-radius:50%;
            }
        }
        .username{
            position: absolute;
            top:.88rem;
            left: .45rem;
            font-size:.14rem;
            line-height:.2rem;
            color:${(props)=>props.isVip===0?'gold':'white'};
        }
        .overtime{
            position: absolute;
            top:1.2rem;
            left: .45rem;
            font-size:.12rem;
            line-height: .17rem;
            color:#D4BD85;
            display:${(props)=>props.isVip===0?'block':'none'}
        }
    }
    >h3{
        padding:.1rem .15rem;
        width:100%;
        text-align:center;
        font-size:.2rem;
        line-height: .28rem;
        color:#333;
    }
    .payVip{
        display:flex;
        /* a{ */
        >div{
            height: 1.05rem;
            width:1.05rem;
            margin-left:.15rem;
        }
        /* } */
    }
    .active{
        background:url(${monthBG}) no-repeat center;
        background-size:100% 100%;
        .firstPay{
            display:block;
        }
    }
    .chooseWay{
        display:flex;
        padding:0 .15rem;
        margin-top:.1rem;
        padding:0 .15rem;
        width:100%;
        align-items:center;
        .payWay{
            width:.22rem;
            height: .22rem;
            img{
                width:100%;
                height: 100%;
            }
        }
        .payTxt{
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
                margin-left:.05rem;
                font-weight:600;
            }
            h4{
                font-size:.14rem;
                line-height:.1rem;
                color:#666;
                font-weight:normal;
            }
        }
        .right_jt{
            width:.08rem;
            height: .14rem;
            margin-top:.02rem;
            background:url(${jiantou}) no-repeat center;
            background-size:100% 100%;
        }
    }
    .openVip{
        margin-top:.85rem;
        padding:0 .15rem;
        div{
            height: .44rem;
            line-height:.44rem;
            background:#D3BC85;
            color:#fff;
            font-size:.16rem;
            width:100%;
            text-align:center;
            border-radius:.14rem;
        }
    }
    .mask{
        height: 100%;
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        display:${(props)=>props.showMask?'block':'none'};
        .blackBG{
            height: 100%;
            background:rgba(0,0,0,0.3);
        }
        .codeBG{
            position: absolute;
            margin:auto;
            height: 3rem;
            width:3rem;
            background:#fff;
            top:0;
            right: 0;
            left: 0;
            bottom:0;
            display:${(props)=>props.isShowCodeBG?'block':'none'};
            img{
                width:100%;
                height: 100%;
            }
        }
        .content{
            width:3.05rem;
            margin-left:.35rem;
            position: absolute;
            top:0;
            left: 0;
            bottom:0;
            right: 0;
            margin:auto;
            height: 1.5rem;
            background:#fff;
            border-radius:.14rem;
            display:${(props)=>props.payOk?'block':'none'};
            .imgBox{
                text-align:center;
                img{
                    width:20%;
                    height: 20%;
                    margin-top:.1rem;
                }
                p{
                    margin-top:.1rem;
                }
            }
            .submit{
                margin-top:.2rem;
                display:flex;
                justify-content:space-between;
                padding:0 .5rem;
                span:first-child{
                    color:#FCB408;
                    margin-right:.2rem;
                    font-size:.16rem;
                    font-weight:500;
                }
                span:last-child{
                    color:#FCB408;
                    margin-left:.2rem;
                    font-size:.16rem;
                    font-weight:500;
                }
            }
        }
    }
`

export {
    VipContainer
}