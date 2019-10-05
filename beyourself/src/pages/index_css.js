import styled from 'styled-components'

const Container = styled.div`
    font-size : 14px;
    display : flex;
    text-align : center;
    flex-direction : column;
    height : 100%;
    width: 100%;
`


const Main = styled.div`
    font-size : 14px;
    color: black;
    flex : 1;
`

const Footer = styled.div`  
    font-size : 12px;
    color: black;
    height : 49px;
    background : #FFFFFF;
    display : flex;
`



export { Container , Main , Footer }