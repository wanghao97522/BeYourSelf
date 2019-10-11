import styled from 'styled-components'

import back from 'assets/images/profile/fanhui@2x.png'

const AboutUsContainer = styled.div`
    height: 100%;
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
    .banner{
        height:1.7rem;
        img{
            height: 100%;
            width:100%;
        }
    }
    .title{
        padding-left:.2rem;
        height: .25rem;
        margin-top: .3rem;
        display:flex;
        align-items:center;
        .circle{
            width:.14rem;
            height: .14rem;
            border-radius:50%;
            background:#FCB408;
        }
        .txt{
            font-size:.18rem;
            color:#393939;
            margin-left:.1rem;
        }
    }
    .article{
        margin-top:.2rem;
        padding:0 .3rem;
        p{
            color:#393939;
            font-size:.14rem;
            line-height: .2rem;
            text-align:justify;
            font-weight:500;
        }
        .secP{
            margin-top:.1rem;
        }
    }
`

export {
    AboutUsContainer
}