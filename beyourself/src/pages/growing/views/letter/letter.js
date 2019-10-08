import styled from 'styled-components';
import fh from '../../../../assets/images/grow/icon-fh.png';
import daka from '../../../../assets/images/grow/icon-daka.png';
const LetterstyContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .bg{
        width:100%;
        height:2.16rem;
        background:red;
        display:flex;
        flex-direction:column;
        padding:0.11rem 0.16rem 0.22rem 0.16rem;
        justify-content:space-between;
        .bgtop{
            display:flex;
            justify-content:space-between;
            span:first-child{
                width:0.12rem;
                height:0.22rem;
                background:url(${fh}) no-repeat;
                background-size:100%;
            }
            span:last-child{
                width:0.24rem;
                height:0.24rem;
                background:url(${daka}) no-repeat;
                background-size:100%;
            }
        }
        .bgbottom{
            color:#FFFBFC;
            font-size:0.18rem;
            font-weight:600;
            p{
                line-height:0.25rem;
                height:0.25rem;
            }
        }
    }
    .lettertext{
        flex:1;
        padding-left:0.31rem;
        p:nth-child(1){
            background:red;
        }
    }
`
export default LetterstyContainer