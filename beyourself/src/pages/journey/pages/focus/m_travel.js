import styled from 'styled-components'
// import bgImg from 'assets/images/journey/heshui-bj@2x.png'
// import title from 'assets/images/journey/title@2x.png'

const Body = styled.div`
    font-size: .14rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    display: ${(props)=>(props.display===3?'block':'none')};
`
const Bg = styled.div`  
    height: 100%;
    width: 100%;
    padding-top:.29rem;
    background: url(${(props)=>props.bgImg}) no-repeat center top / 100%;
`
const Title = styled.div`  
    background: url(${(props)=>props.title}) no-repeat center top / 100%;
    height: .28rem;
    width: 1rem;
    margin: 0 0 0 .14rem;
`
const DegreeOfCompletion = styled.div`
    height: .5rem;
    margin-top: .36rem;
    padding: 0 .75rem;
    display: flex;
    justify-content: space-between;
`
const Done = styled.div`
    height: .5rem;
    width: max-content;
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
const TaskList = styled.div`
    margin-top: .46rem;
    display: flex;
    flex-direction: column;
    height: max-content;
    padding: .2rem 0;
    align-items: center;
    justify-content: center;
    background-color: #ED6666;
`
const Task = styled.div`
    height: .87rem;
    width: .87rem;
    margin: .15rem 0;
    background: #ED6666;
    border-radius: 50%;
    .enter_de{
        height: .18rem;
        width: .1rem;
        margin: -.38rem 0 0 1.9rem;
        >img{
            height: 100%;
            width: 100%;
        }
    }
`
const Point = styled.div`
    height: .05rem;
    width: .05rem;
    margin: .05rem 0;
    background: white;
    border-radius: 50%; 
`
export { Body, Bg, Title , DegreeOfCompletion , Done , Word , TaskList , Task , Point }