import styled from 'styled-components'
import border from 'components/border'


const HelpContainer = styled.div`
    display:flex;
    flex-direction:column;
    height: 100%;
`

const HeaderContainer = border({
    width:'0 0 1px 0',
    color:'#E4E4E4',
    comp:styled.header`
        height: .44rem;
        display:flex;
        padding:0 .15rem;
        background:#fff;
        align-items:center;
        .back,.ok{
            font-size:.16rem;
            color:#FCB408;
        }
        .title{
            flex:1;
            text-align:center;
            font-size:.18rem;
            color:#333;
            font-weight:600;
        }
    `
})

const FootContainer = styled.div`
    margin-top:.1rem;
    background:#fff;
    flex:1;
    ul{
        li:last-child{
            .inputTxt{
                padding:.1rem .2rem 0;
                height: 100%;
                textarea{
                    border:none;
                    width:100%;
                    height: 100%;
                    ::placeholder{
                        font-size:.12rem;
                        color:#CCCCCC;
                    }
                }
            }
        }
    }
    .screenshot{
        div:first-child{
            color:#333333;
            font-size:.14rem;
            line-height: .2rem;
            padding:0 .15rem;
            font-weight:600;
            margin-top:.1rem;
        }
        .imgBox{
            img{
                scale:(0.3,0.3);
            }
        }
    }
`

const LiContainer = border({
    width:'0 0 1px 0',
    color:'#E4E4E4',
    comp:styled.li`
        height: .8rem;
        p:first-child{
            color:#CCCCCC;
            font-size:.12rem;
            line-height: .17rem;
            margin-top:.1rem;
            padding:0 .2rem;

        }
        p:last-child{
            font-size:.14rem;
            color:#333333;
            line-height: .2rem;
            margin-top:.02rem;
            padding:0 .2rem;
        }
    `
})

export {
    HelpContainer,
    HeaderContainer,
    FootContainer,
    LiContainer
}