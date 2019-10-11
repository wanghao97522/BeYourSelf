import styled from 'styled-components'

const MaskContainer = styled.div`
    height: 100%;
    background:rgba(33,33,33,0.3);
    position: absolute;
    top:0;
    left:0;
    width:100%;
    display:${props=> props.isShow?'block':'none'}
    footer{
        position: absolute;
        bottom:0;
        background:#fff;
        height: 2rem;
        width:100%;
        padding:.1rem .15rem 0;
        .txt{
            color:#979797;
            font-size:.14rem;
        }
    }
`

export {
    MaskContainer
}