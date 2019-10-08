import styled from 'styled-components'

import back from 'assets/images/profile/fanhui@2x.png'

const AboutUsContainer = styled.div`
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
        }
    }
    .banner{
        height:1.7rem;
        img{
            height: 100%;
            width:100%;
        }
    }
`

export {
    AboutUsContainer
}