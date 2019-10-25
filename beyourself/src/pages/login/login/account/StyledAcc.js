import styled from 'styled-components'

const AccountContainer = styled.div`
    div:first-child{
        margin-top:.2rem;
    }
    div:nth-child(2){
        margin-top:.2rem;
    }
    >p{
        position:absolute;
        padding-top:.1rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(252,180,8,1);
        line-height:.2rem;
    }
    .btn{
        position: absolute;
        top:3.57rem;
        left:.15rem;
    }
    .forget{
        position:absolute;
        top:4.11rem;
        right:.2rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.2rem;
    }
`
export {AccountContainer}