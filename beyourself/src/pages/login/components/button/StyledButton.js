import styled from 'styled-components'

const ButtonContariner = styled.div`
    button{
        width:3.45rem;
        height:.44rem;
        background:${props => props.innerBg ? props.innerBg : "#FCB408"};
        border-radius:.14rem;
        line-height:.44rem;
        text-align:center;
        border:0;
        font-size:.16rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:600;
        color:rgba(128,81,18,1);
        line-height:.22rem;
    }
`
export {ButtonContariner}