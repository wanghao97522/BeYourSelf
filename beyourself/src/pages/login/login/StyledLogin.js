import styled from 'styled-components'
import bg from 'assets/images/login/background2@2x.png'

const LoginContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
    background:url(${bg}) no-repeat center top / 100%;
    h2{
        margin-top:.97rem;
        margin-left:.2rem;
        font-size:.2rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:600;
        color:rgba(255,255,255,1);
        line-height:.28rem;
    }
`
export { LoginContainer }