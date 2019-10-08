import styled from 'styled-components'


const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    padding-top: .2rem;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    height: .51rem;
    line-height: .25rem;
    font-size: .18rem;
    color: #333333;
    div{
        display: inline-block;
        img{
            height: .2rem;
            width: .11rem;
            margin-left: .15rem;
        }
        &.title{
            margin-left: 1.43rem
        }
    }  
`

const Travel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 .15rem;
    >p{
        height: .17rem;
        color: #ABABAB;
        font-size: .12rem;
        line-height: .17rem;
        margin-top: .09rem;
    }
`

const TravelItem = styled.div`
    height: 1.25rem;
    margin-top: .1rem;
    border-radius: .14rem;
`

export { Container , Title , Travel , TravelItem }