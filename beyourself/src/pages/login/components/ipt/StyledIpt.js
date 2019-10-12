import styled from 'styled-components'
import border from 'components/border.js'
const IptContainer = styled.div`
    span{
        font-size:.2rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.25rem;
    }
`
const BorderedContainer = border({
    width: '0 0 3px 0',
    color:'#fff',
    comp:styled.span`
        margin-left:.1rem;
        input{
            background:rgba(255,255,255,0);
            border:0;
            margin-left:.04rem;
            font-size:.18rem;
            font-family:PingFangSC-Regular,PingFangSC;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:.25rem;
            width:2.85rem;
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
export {IptContainer,BorderedContainer}