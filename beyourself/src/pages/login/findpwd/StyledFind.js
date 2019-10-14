import styled from 'styled-components'
import bg from 'assets/images/login/background2@2x.png'
const FindContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
    background:url(${bg}) no-repeat center top / 100%;
    h2{
        margin-top:.97rem;
        margin-left:.2rem;
        font-size:.2rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:.28rem;
    }
    div:nth-child(3){
        margin-top:.41rem;
        margin-left:.2rem;
    }
    div:nth-child(5){
        position: absolute;
        top:3.43rem;
        left:.15rem;
    }
    >p{
        padding-top:.1rem;
        margin-left:.3rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(252,180,8,1);
        line-height:.2rem;
    }
`

export {FindContainer}