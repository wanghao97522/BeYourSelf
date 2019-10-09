import styled from 'styled-components';
import border1px from '../../../../components/border';
const NewSoundstyContainer = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    .wrapper{
        width:100%;
        height:100%;
        overflow:scroll;
        .box{
            background:#fff;
            .am-navbar{
                height:0.46rem;
                .am-navbar-left{
                    font-size:0.18rem;
                    color:#FCB408;
                }
                .am-navbar-title{
                    font-size:0.2rem;
                    font-weight:600;
                }
                .am-navbar-right{
                    font-size:0.18rem;
                    color:#060505;
                }
            }
            
            .habitname{
                .bottom{
                    width:100%;
                    height:1.93rem;
                    padding:0.16rem 0.15rem 0.16rem 0.16rem;
                    img{
                        width:3.44rem;
                        height:1.61rem;
                    }
                }
            }
        }
    }
`
const Top = border1px({
    width: "1px 0 1px 0", comp: styled.div`
        width:100%;
        height:0.41rem;
        padding:0.08rem 0 0.08rem 0.14rem;
        font-size:0.18rem;
        display:flex;
        align-items:center;
        span{
            line-height:0.25rem;
            height:0.25rem;
        }
        span:first-child{
            color:#060505;
        }
        p{
            
        }
        input{
            margin-left:0.23rem;
            color:rgba(6,5,5,0.10);
            border:0;
        }
`})
const HabitTip=border1px({width:'1px 0 0 0',comp:styled.div`
width:100%;
height:0.61rem;
padding:0.18rem 0 0.18rem 0.16rem;
background:#F7F5F5;
display:flex;
align-items:center;
img{
    width:0.2rem;
    height:0.20rem;
}
span{
    display:inline-block;
    font-size:0.18rem;
    line-height:0.25rem;
    height:0.25rem;
    color:#060505;
    margin-left:0.17rem;
}
`})
export { NewSoundstyContainer, Top,HabitTip}