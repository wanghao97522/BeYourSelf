import styled from 'styled-components'
import backImg from 'assets/images/profile/vip/fh@2x.png'


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
            }
        }
        .username{
            position: absolute;
            top:.88rem;
            left: .45rem;
            font-size:.14rem;
            line-height:.2rem;
            color:#fff;
        }
        .overtime{
            position: absolute;
            top:1.2rem;
            left: .45rem;
            font-size:.12rem;
            line-height: .17rem;
            color:#D4BD85;
        }
    }
    h3{
        padding:.1rem .15rem;
        width:100%;
        text-align:center;
        font-size:.2rem;
        line-height: .28rem;
        color:#333;
    }
    .payVip{
        display:flex;
    }
`

export {
    VipContainer
}