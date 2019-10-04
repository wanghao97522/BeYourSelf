import styled from 'styled-components'

let color = 'white'

const Container = styled.div`
    font-size : 14px;
    color: ${color};
    display : flex;
    text-align : center;
    flex-direction : column;
    height : 100%;
    width: 100%;
`

const Header = styled.div`
    font-size : 14px;
    color: ${color};
    height : 44px;
    line-height : 44px;
    background : black;
`

const Main = styled.div`
    font-size : 14px;
    color: black;
    flex : 1;
    background : yellow;
`

const Footer = styled.div`  
    font-size : 14px;
    color: ${color};
    height : 44px;
    line-height : 44px;
    background : black;

`

export { Container , Header , Main , Footer }