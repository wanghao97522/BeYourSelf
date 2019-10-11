import styled from 'styled-components'
import bg from 'assets/images/login/background2@2x.png'

const RegisterSuccContainer = styled.div`
    position:relative;
    /* display:flex; */
    height:100%;
    width:100%;
    background:url(${bg}) no-repeat center top / 100%;
    h2{
        /* padding-top:.97rem; */
        /* padding-left:.2rem; */
        position: absolute;
        top:1.5rem;
        left:1.47rem;
        font-size:.2rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:.28rem;
    }
    h4{
        position: absolute;
        top:2.08rem;
        left:.34rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(192,178,215,1);
        line-height:.2rem;
        margin-bottom:.2rem;
    }
    div:nth-child(3){
        position: absolute;
        top:4.1rem;
        left:.15rem;
    }
    p{
        position: absolute;
        top:4.84rem;
        left:.98rem;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:17px;
    }
`
export { RegisterSuccContainer }