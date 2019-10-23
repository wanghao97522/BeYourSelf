import styled from 'styled-components';
import border1px from 'components/border';
const SelectTimestyContainer =styled.div`
    width:100%;
    height:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
    .timewrapper{
        flex:1;
    }
    .weekwrapper{
        width:100%;
        ul{
            width:100%;
            padding:0.29rem 0.33rem 0.28rem 0.2rem;
            display:flex;
            li{
                width:0.36rem;
                height:0.36rem;
                line-height:0.36rem;
                border-radius:50%;
                border:1px solid #FCB408;
                margin-left:0.1rem;
                text-align:center;
            }
            li.active{
                background:#FCB408;
            }
        }
    }
`
const Title =border1px({width:'0 0 1px 0',comp:styled.div`
    display:flex;
    height:0.41rem;
    padding-left:1.16rem;
    font-weight:600;
    align-items:center;
    span:first-child{
        font-size:0.18rem;
        color:#262626;
        line-height:0.25rem;
    }
    span:last-child{
        font-size:0.16rem;
        line-height:0.25rem;
        color:#FCB408;
        margin-left:0.68rem;
    }
`});
const TimeBox=border1px({
    width:'1px 0 1px 0',comp:styled.div`
    margin-top:0.18rem;
        .am-picker{
              div{
                  font-size:0.18rem;
              }
        }
`
})
export  {SelectTimestyContainer,Title,TimeBox}
