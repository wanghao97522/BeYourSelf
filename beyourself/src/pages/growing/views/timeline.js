import styled from 'styled-components';
const TimestyContainer =styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    div:first-child{
        width:100%;
        height:100%;
        overflow:scroll;
        background:url(${props=>props.quxiao}) no-repeat;
        .top{
            margin-top:0.22rem;
            padding-left:0.37rem;
            display:flex;
            align-items:center;
            color:#fff;
            height:0.25rem;
            line-height:0.25rem;
            span{
                display:inline-block;
                width:0.16rem;
                height:0.25rem;
                line-height:0.25rem;
                background:url(${props=>props.guanbi}) no-repeat;
                background-size:100%;
                background-position:center;
            }
            h2{
                font-size:0.18rem;
                line-height:0.25rem;
                width:0.54rem;
                margin-left:0.43rem;
            }
        }
        
    }

`
export {TimestyContainer}