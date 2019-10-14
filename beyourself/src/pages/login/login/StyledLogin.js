import styled from 'styled-components'
import bg from 'assets/images/login/background2@2x.png'

const LoginContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
    background:url(${bg}) no-repeat center top / 100%;
    .title{
        margin-top:.97rem;
        margin-left:.2rem;
        font-size:.2rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:600;
        color:rgba(255,255,255,1);
    }
    .user{
        margin-top:.1rem;
        margin-left:.2rem;
        height:.24rem;
    }
    .user span{
        padding-top:0;
        font-size:.18rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(192,178,215,1);
        line-height:.24rem;
    }
    .user span:last-child{
        padding-left:.1rem;
    }
    .user .active{
        color:#fff;
    }
    
    
    >div:nth-child(4){
        margin-top:.2rem;
        margin-left:.2rem;
    }
    p{
        margin-left:.3rem;
        margin-top:.1rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(252,180,8,1);
        line-height:.2rem;
    }
    .goRegi{
        position:absolute;
        top:4.81rem;
        left:1.25rem;
        text-align:center;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.2rem;
    }
`
export { LoginContainer }