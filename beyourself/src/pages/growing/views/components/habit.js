import styled from 'styled-components';
import zxcg from '../../../../assets/images/grow/icon-zxcg.png';
import yuja from '../../../../assets/images/grow/icon-yuja.png';
const HabitContainer =styled.div`
    .title{
        padding-left:0.34rem;
        font-size:0.18rem;
        line-height:0.25rem;
        color:#fff;
    }
    .total{
        width:0.55rem;
        height:0.55rem;
        border-radius:50%;
        background:rgba(255,254,250,0.43);
        opacity:0.43;
        margin:0.18rem 0 0 0.25rem;
        color:#FFF9F9;
        font-size:0.12rem;
        text-align:center;
        line-height:0.55rem;
    }
    .circlewrapper{
        display:flex;
        align-items:center;
        .circle{
        width:0.45rem;
        height:0.45rem;
        border-radius:50%;
        background:rgba(80,73,168,1);
        margin-left:0.30rem;
        background:url(${zxcg}) no-repeat;
        background-size:100%;
        }
        .graycircle{
            width:0.45rem;
            height:0.45rem;
            border-radius:50%;
            background:rgba(80,73,168,1);
            margin-left:0.30rem;
            background:url(${yuja}) no-repeat;
            background-size:100%;
        }
        .text{
            font-size:0.16rem;
            color:#fff;
            line-height:0.22rem;
            padding-left:0.12rem;
        }
    }
    span{
        display:block;
        height:0.24rem;
        width:1px;
        margin-left:0.525rem;
        background:rgba(255,254,250,0.43);
    }
    .end{
        padding-left:0.37rem;
        font-size:0.16rem;
        color:#fff;
        line-height:0.22rem;
        margin-top:0.04rem;
    }

`
export {HabitContainer}