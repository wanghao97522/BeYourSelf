import styled from 'styled-components'

import headBG from 'assets/images/profile/vip/bqkdb@2x.png'
import backBG from 'assets/images/profile/vip/bht@2x.png' 
import invitBG from 'assets/images/profile/vip/lbqkdb@2x.png'
const RecardContainer = styled.div`
    height: 100%;
    background:#fff;
    .header{
        height: 1.37rem;
        background:url(${headBG}) no-repeat center;
        background-size:100% 100%;
        .title{
            height: .44rem;
            padding:0 .15rem;
            display:flex;
            align-items:center;
            .back{
                width:.13rem;
                height: .22rem;
                background:url(${backBG}) no-repeat center;
                background-size:100% 100%;
            }
            .txt{
                flex:1;
                text-align: center;
                color:#fff;
                font-size:.2rem;
                font-weight:500;
            }
        }
    }
    .reCard{
        padding:0 .15rem;
        margin-top:.6rem;
        display:flex;
        align-items:center;
        .reCardBG{
            width:.22rem;
            height: .22rem;
            img{
                width:100%;
                height: 100%;
            }
        }
        .txt{
            color:#fff;
            font-size:.16rem;
            flex:1;
            margin-left:.05rem;
        }
        .num{
            font-size:.16rem;
            color:#fff;

        }
    }
    .invit{
        padding:.1rem .15rem 0;
        div{
            height: 1.17rem;
            background:url(${invitBG}) no-repeat center;
            background-size:100% 100%;
            position: relative;
            padding:.25rem 0 0 .25rem;
            p{
                color:#fff;
            }
            p:first-child{
                font-size:.24rem;
            }
            p:last-child{
                font-size:.16rem;
                margin-top:.1rem;
            }
        }
    }
    .foot{
        padding:.1rem .3rem 0;
        > p{
            font-size:.16rem;
            color:#333333;
            font-weight:600;
        }
        ul{
            li{
                margin-top:.2rem;
                p:first-child{
                    font-size:.16rem;
                    color:#333333;
                    font-weight:600;
                }
                p:last-child{
                    margin-top:.04rem;
                    font-weight:.12rem;
                    color:#A3A3A3;
                }
            }
        }
    }
    .lastTip{
        font-size:.16rem;
        color:#A3A3A3;
        margin-top:.4rem;
        text-align:center;
        font-weight:600;
    }
`

export {
    RecardContainer
}