import styled from 'styled-components'

import headBG from 'assets/images/profile/vip/yqgdhydb@2x.png'
import back from 'assets/images/profile/vip/bht@2x.png'
import userBG from 'assets/images/profile/vip/zhmcdb2x.png'

const InvitPageContainer = styled.div`
    height: 100%;
    background:#fff;
    header{
        background:url(${headBG}) no-repeat center;
        background-size:100% 100%;
        padding:0 .15rem;
        height:1.57rem ;
        .title{
            display:flex;
            align-items:center;
            height: .44rem;
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
    }
    .nav{
        padding:0 .15rem;
        li{
            width:100%;
            height: .7rem;
            background:url(${userBG}) no-repeat center;
            background-size:100% 100%;
            border-radius:.14rem;
            margin-top:.1rem;
            display:flex;
            align-items:center;
            .photo{
                width:.4rem;
                height: .4rem;
                img{
                    width:100%;
                    height: 100%;
                    margin:0 .15rem;
                }
            }
            h3{
                font-size:.16rem;
                color:#fff;
                margin-left:.3rem;
            }
            h4{
                font-size:.12rem;
                color:#fff;
                margin-left:.34rem;
                margin-top:.05rem;
            }
        }
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
            margin-top:2.45rem;
        }
    }
`

export {
    InvitPageContainer
}