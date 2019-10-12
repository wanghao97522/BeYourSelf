import styled from 'styled-components';
import border1px from 'components/border';
const SoundHabitstyContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
    .bottom{
        flex:1;
        .weekbox{
            
        }
    }
`
const Title =border1px({
    width:'0 0 1px 0',
    comp:styled.div`
        width:100%;
        padding:0.07rem 0 0.07rem 0;
        display:flex;
        align-items:center;
        box-sizing:content-box;
        span:first-child{
            font-size:0.18rem;
            color:#262626;
            height:0.25rem;
            line-height:0.25rem;
            margin-left:1.16rem;
        }
        span:last-child{
            font-size:0.16rem;
            color:#FCB408;
            height:0.22rem;
            line-height:0.22rem;
            margin-left:0.68rem;
        }
`
})
const TimeBox =border1px({
    width:'1px 0 1px 0',comp:styled.div`
    width:100%;
    height:2.10rem;
    margin-top:0.18rem;
    overflow:hidden;
  
`
})
const WeekBox=border1px({
    width:'1px 0 0 0',
    comp:styled.div`
            width:100%;
            height:0.93rem;
            padding:0.29rem 0 0.28rem 0.2rem;
            z-index:99999;
            ul{
                width:100%;
                height:100%;
                display:flex;
                li{
                    width:0.36rem;
                    height:0.36rem;
                    border:1px solid #FCB408;
                    border-radius:50%;
                    margin-left:0.1rem;
                    text-align:center;
                    line-height:0.36rem;
                    color:#FCB408;
                    
                }
                li.active{
                    color:#fff;
                    background:#FCB408;
                }
            }
    `
})
export {
    SoundHabitstyContainer,
    Title,
    TimeBox,
    WeekBox
}