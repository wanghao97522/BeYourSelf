import styled from 'styled-components'

const ChooseMonthContainer = styled.div`
    height: 100%;
    width:100%;
    background:#F7F7F7;
    border-radius:.1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    position: relative;
    .longTime{
        font-size:.12rem;
        color:#666;
        line-height:.17rem;
        margin-top:.1rem;
    }
    .realPrice{
        font-size:.16rem;
        color:#FCB408;
        line-height:.22rem;
        margin-top:.15rem;
    }
    .orignPrice{
        text-decoration:line-through;
        margin-top:.08rem;
        color:#666;
        font-size:.12rem;
    }
    .firstPay{
        width:.52rem;
        height:.2rem;
        background:#D4BD85;
        border-radius:.03rem;
        line-height:.2rem;
        text-align:center;
        font-size:.12rem;
        position: absolute;
        top:-.1rem;
        color:#fff;
        display:none;
    }
`

export {
    ChooseMonthContainer
}