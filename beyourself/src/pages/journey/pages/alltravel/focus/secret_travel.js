import styled from 'styled-components'

import asecrettravel from 'assets/images/journey/background-daolu@2x.png'
import titlebg from 'assets/images/journey/titlebg@2x.png'

const Container = styled.div`
    height: 100%;
    width: 100%;
    background:url(${asecrettravel}) no-repeat center top / 100%;
    padding-top: .2rem;
    display: flex;
    flex-direction: column;
    .title{
        height: 1.31rem;
        width: 2.41rem;
        background:url(${titlebg}) no-repeat center top / 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1.05rem 0 0 .67rem;
        >img{
            height: .22rem;
            width: 1.4rem;
        }
    }
    .top{
        text-align: center;
        height: .25rem;
        line-height: .25rem;
        font-size: .2rem;
        margin-top: .18rem;
        color: white;
    }
    .middle{
        text-align: center;
        height: .25rem;
        line-height: .25rem;
        font-size: .2rem;
        margin-top: .22rem;
        color: white;
    }
    .bottom{
        height: .96rem;
        width: .96rem;
        margin: .54rem 0 0 1.39rem;
        >img{
            height: 100%;
            width: 100%;
        }
    }
`

const Title = styled.div`
    height: .51rem;
    line-height: .25rem;
    font-size: .18rem;
    color: #333333;
    div{
        display: inline-block;
        margin-left: .15rem;
        img{
            height: .16rem;
            width: .16rem;
            margin-left: .15rem;
        }
        &.title{
            margin-left: 1.43rem
        }
    }  
`

export { Container , Title }