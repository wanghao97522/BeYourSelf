import styled from 'styled-components'
import bg from 'assets/images/login/background@2x.png'
import bk from 'assets/images/login/fanhui@2x.png'
const LiContariner = styled.div`
    height:100%;
    width:100%;
    background:url(${bg}) no-repeat center top / 100%;
    /* header {
        padding-top:.31rem;
    }
    header >div{
        background:url(${bk}) no-repeat center top / 100% ;
        height:.22rem;
        width:.12rem;
        margin-left:.15rem;
    } */
    div:nth-child(3){
        margin-top:1.3rem;
        margin-left:.15rem;
    }
    div:nth-child(4){
        margin-top:.2rem;
        margin-left:.15rem;
    }
`
const TitleContainer = styled.div`
    padding-left:.2rem;
    padding-top:.43rem;
    p:first-child{
        font-family:PingFangSC;
        font-size:.2rem;
        color:#fff;
        font-weight:600;
        padding-bottom:.08rem;
    }
    P:last-child{
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(192,178,215,1);
        line-height:.2rem;
    }
`
const IntroductionContainer = styled.div`
    margin-top:1.17rem;
    p:first-child{
        font-size:.18rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,.8);
        text-align:center;
        line-height:.25rem;
    }
    p:last-child{
        font-size:.12rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,.8);
        line-height:.17rem;
        text-align:center;
    }
`

export {LiContariner,TitleContainer ,IntroductionContainer }