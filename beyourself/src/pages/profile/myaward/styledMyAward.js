import styled from 'styled-components'

import myawardBG from 'assets/images/profile/vip/wdjlzd@2x.png'
import back from 'assets/images/profile/vip/bht@2x.png'


const MyAwardContainer = styled.div`
    height:100% ;
    background:#fff;
    .upon{
        background:url(${myawardBG}) no-repeat center;
        background-size:100% 100%;
        padding:0 .15rem;
        .head{
            height: .44rem;
            display:flex;
            align-items:center;
            .back{
                width:.13rem;
                height: .22rem;
                background:url(${back}) no-repeat center;
                background-size:100% 100%;
            }
            .txt{
                flex:1;
                text-align:center;
                font-size:.2rem;
                color:#fff;
            }
        }
        .invite{
            height: 4.35rem;
            padding-top:1.1rem;
            h2{
                width:100%;
                text-align:center;
                color:#fff;
                font-size:.3rem;
                font-family:PingFangSC;
                height: .42rem;
                line-height:.42rem;
            }
            h3{
                font-size:.16rem;
                color:#fff;
                font-family:PingFangSC;
                text-align:center;
                width:100%;
                height: .22rem;
                line-height:.22rem;
                margin-top:.1rem;
            }
            hr{
                width:1.36rem;
                margin-top: .1rem;
            }
            ul{
                margin-top:.2rem;
                li{
                    color:#fff;
                    font-size:.12rem;
                    width:100%;
                    text-align:center;
                    font-family:PingFangSC;
                    line-height: .17rem;
                }
            }
        }
    }
    .foot{
        padding:.22rem .15rem 0;
        display:flex;
        justify-content:space-between;
        color:#333;
        font-size:.16rem;
        font-weight:600;
    }
    .invit_button{
        padding:0 .15rem;
        div{
            height: .44rem;
            width:100%;
            background:#3881c5;
            color:#fff;
            font-size:.16rem;
            border-radius:.14rem;
            text-align:center;
            line-height:.44rem;
            margin-top:.45rem;
        }
    }
`

export {
    MyAwardContainer
}