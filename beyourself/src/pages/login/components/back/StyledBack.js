import styled from 'styled-components'
import bk from 'assets/images/login/fanhui@2x.png'

const BackContainer = styled.div`
    header {
        padding-top:.11rem;
    }
    header >div{
        background:url(${bk}) no-repeat center top / 100% ;
        height:.22rem;
        width:.12rem;
        margin-left:.15rem;
    }
`
export {BackContainer}