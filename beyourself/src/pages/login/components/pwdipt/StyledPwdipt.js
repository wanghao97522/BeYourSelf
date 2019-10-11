import styled from 'styled-components'
// import dakai from 'assets/images/login/dakai2@x.png'
// import guanbi from 'assets/images/login/guanbi2@x.png'
import border from 'components/border.js'


const PwdIptContainer = styled.div`
    position: relative;
    top:.39rem;
    width:3.45rem;
    margin-left:.15rem;
    /* text-align:center; */
    span{
        position: absolute;
        bottom:.05rem;
        right:.15rem;
        width:.18rem;
        height:.12rem;
        background:url(${props => props.eyes}) no-repeat center top / 100%;
        /* background:#ff0; */
    }
`
const BorderedContainer = border({
    width: '0 0 3px 0',
    color:'#fff',
    comp:styled.div`
        input{
            background:rgba(255,255,255,0);
            border:0;
            font-size:.18rem;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:.25rem;
        }
        input::placeholder {
            font-size:.14rem;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(137,95,167,1);
            line-height:.2rem;
            margin-bottom:.02rem;
        }
        input::after{
            font-size:.13rem;
            color:#666;
        }
    `
})
export {PwdIptContainer , BorderedContainer}