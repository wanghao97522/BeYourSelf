import styled from 'styled-components';
import fh from '../../../../assets/images/grow/icon-fh.png';
import daka from '../../../../assets/images/grow/icon-daka.png';
import timg from '../../../../assets/images/grow/timg2@x.png';
const LetterstyContainer=styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .bg{
        width:100%;
        height:2.16rem;
        display:flex;
        flex-direction:column;
        padding:0.11rem 0.16rem 0.22rem 0.16rem;
        justify-content:space-between;
        background:url(${timg});
        background-size:100% 2.16rem;
        background-position:center center
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
        padding:0.31rem 0.14rem 0 0.15rem;
        p:nth-child(1){
            font-size:0.12rem;
            color:rgba(3,3,3,1);
            line-height:0.17rem;
            display:flex;
            justify-content:space-between;
        }
        P:nth-child(2){
            margin-top:0.14rem;
            font-size:0.18rem;
            font-weight:600;
            line-height:0.25rem;
            color:#030202
        }
        p:nth-child(3){
            margin-top:0.18rem;
            font-size:0.16rem;
            color:#030202;
        }
        p:nth-child(4){
            margin-top:0.39rem;
            font-size:0.16rem;
            color:#030202;
            span:first-child{
                font-weight:600;
            }
        }
        P:nth-child(5){
            margin-top:0.39rem;
            font-size:0.16rem;
            color:#030202
        }
    }
`
export default LetterstyContainer