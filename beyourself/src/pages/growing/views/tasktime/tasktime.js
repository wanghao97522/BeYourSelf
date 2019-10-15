import styled from 'styled-components';
import border1px from 'components/border';
const TaskTimeStyContainer =styled.div`
    width:100%;
    height:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
    .title{
        width:100%;
        height:0.44rem;
        display:flex;
        span:first-child{
            font-size:0.16rem;
            color:#FCB408;
            line-height:0.44rem;
            margin-left:0.11rem;
        }
        .center{
            display:flex;
            flex-direction:column;
            margin:0.02rem 0.86rem 0.03rem 0.85rem;
            align-items:center;
            span:first-child{
                width:1.09rem;
                height:0.25rem;
                font-size:0.18rem;
                font-weight:600;
                color:#262626;
                line-height:0.25rem;
            }
            span:last-child{
                width:0.24rem;
                height:0.17rem;
                font-size:0.12rem;
                font-weight:400;
                color:#AEAEAE;
            }
        }
        .finish{
            font-size:0.16rem;
            color:#FCB408;
            line-height:0.44rem;
        }
    }
    .wrapper{
        margin-top:0.2rem;
        height:2.32rem;
    }
`
const Bottom=border1px({
    width:'1px 0 0 0',
    comp:styled.div`
         flex:1;
    `
})
const Wrapper=border1px({
    width:'1px 0 1px 0',
    comp:styled.div`
        margin-top:0.2rem;
        height:2.32rem;
        overflow:hidden;
    `
})
export {
    TaskTimeStyContainer,
    Bottom,
    Wrapper
}