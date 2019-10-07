import styled from 'styled-components'
import bgImg from 'assets/images/journey/heshui-bj@2x.png'
import title from 'assets/images/journey/title@2x.png'

const Body = styled.div`
    font-size: 14px;
    display: flex;
    text-align: center;
    flex-direction: column;
    overflow: scroll;
    height: 100%;
    width: 100%;
`
const Bg = styled.div`
    height: 100%;
    width: 100%;
    background: url(${bgImg}) no-repeat center top / 100%; 
`
const Title = styled.div`  
    background: url(${title}) no-repeat center top / 100%;
    height: .28rem;
    width: 1rem;
    margin: .69rem 0 0 .14rem;
`
const DegreeOfCompletion = styled.div`
    height: .5rem;
    margin-top: .36rem;
    display: flex;
`
const Done = styled.div`
    height: .5rem;
    width: .36rem;
    margin-left: .75rem;
    display: flex;
    flex-direction: column;
`
const Doing = styled.div`
    height: .5rem;
    width: .72rem;
    margin-left: 1.34rem;
    display: flex;
    flex-direction: column;
`
const Word = styled.div`
    height: 50%;
    font-size: .18rem;
    line-height: 100%;
    color: white;
    text-align: center;
`
// const TaskList = styled.div``
const Task = styled.span`
display: inline-block;
`




export { Body , Bg , Title , DegreeOfCompletion , Done , Doing , Word , Task }