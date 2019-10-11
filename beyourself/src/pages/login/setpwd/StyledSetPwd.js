import styled from 'styled-components'
import bg from 'assets/images/login/background2@2x.png'
const SetPwdContainer = styled.div`
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
    h4{
        position: absolute;
        top:1.88rem;
        left:.2rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(192,178,215,1);
        line-height:.2rem;
        margin-bottom:.2rem;
    }
    div:nth-child(4){
         margin-top:.35rem;
        /* margin-left:.2rem;  */
        
    }
    div:nth-child(5){
        margin-top:.15rem;
        
    }
    div:nth-child(7){
        position: absolute;
        top:4.12rem;
        left:.15rem;
    }
    >p{
        position: absolute;
        top:3.26rem;
        left:.3rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(252,180,8,1);
        line-height:.2rem;
        height:.2rem;
    }


`

export {SetPwdContainer}