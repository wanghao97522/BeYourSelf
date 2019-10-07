import styled from "styled-components";
const ProstyContainer=styled.div`
    width:100%;
    /* height:100%; */
    /* margin-top:20px; */
    height:100%;
    overflow:hidden;
    flex-direction:column;
    background:#fff;
    .top{
        width:100%;
        height:100%;
        overflow:scroll;
        .wrapper{
            width:100%;
            height:100%;
            overflow:scroll;
            h1{
            font-size:0.2rem;
            line-height:0.28rem;
            height:0.28rem;
            padding-left:0.19rem;
            margin-top:0.08rem;
            font-family:PingFangSC-Semibold,PingFangSC;
            font-weight:600;
            color:rgba(4,4,4,1);
            flex:1;
        }
        .timeline{
            width:3.45rem;
            height:2.76rem;
            background:linear-gradient(90deg,rgba(57,1,96,1) 0%,rgba(17,13,79,1) 100%);
            border-radius:0.14rem;
            margin:0.28rem auto 0;
            h2{
                padding:0.18rem 0 0 0.25rem;
                font-size:0.18rem;
                line-height:0.25rem;
                /* height:0.25rem; */
                color:#fff;
            }
            .circleline{
                margin-top:0.42rem;
                padding-left:0.53rem;
                display:flex;
                align-items:center;
                .circle{
                    width:0.47rem;
                    height:0.47rem;
                    border-radius:50%;
                    font-size:0.11rem;
                    font-family:PingFangSC-Regular,PingFangSC;
                    line-height:0.47rem;
                    text-align:center;
                    color:#fff;
                    span{
                        background:linear-gradient(180deg, rgba(255,253,253,1) 0%, rgba(255,249,249,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                }
                .gray{
                    background:#787097;
                }
                .finished{
                    background:rgba(100,100,191,1);
                    opacity:0.55;
                }
                .line{
                    display:block;
                    width:0.3rem;
                    height:1px;
                    background:#979797;
                }
                .finishedtext{
                    font-size:0.11rem;
                    line-height:0.16rem;
                    color:#fff;
                    margin-left:0.08rem;
                }
            }
            .starttext{
                    margin:0.37rem 0 0 0.25rem;
                    width:2.85rem;
                    font-size:0.16rem;
                    color:#fff;
                    line-height:0.22rem;
                    

            }
        }
            
        }
        .month{
            width:3.45rem;
            height:3.55rem;
            margin:0.20rem auto 0;
            background:linear-gradient(270deg,rgba(85,29,172,1) 0%,rgba(50,131,244,1) 100%);
            border-radius:0.14rem 0.14rem 0rem 0rem;
            overflow:hidden;
            h2{
                font-size:0.18rem;
                color:#fff;
                line-height:0.25rem;
                margin-top:0.36rem;
                padding-left:0.33rem;
            }
            h3{
                font-size:0.16rem;
                line-height:0.22rem;
                color:#fff;
                margin-top:0.05rem;
                padding-left:0.33rem;
            }
            .calendarContainer{
                touch-action: none;
                color: white !important;
                padding: 0 0.2rem;
                .mask{
                    display: none !important;
                }
                .content {
                    position: initial !important;
                }
                div{
                    background: transparent;
                }
                .month-title {
                    display: none !important;
                }
                .cell, .date{
                    color: white !important;
                }
                .week-panel{
                    border: none;
                }
                .info{
                    display: none;
                }
                .confirm-panel{
                    display: none;
                }
            }
        }
        .finishcon{
            width:3.45rem;
            margin:0 auto;
            height:1.98rem;
            background:rgba(83,168,215,1);
            overflow:hidden;
            h2{
                margin-top:0.26rem;
                padding-left:0.33rem;
                font-size:0.18rem;
                line-height:0.25rem;
                color:#fff;
            }
            p{
                font-size:0.16rem;
                line-height:0.22rem;
                color:#fff;
                padding-left:0.3rem;
            }
            .fin-top{
                margin-top:0.02rem;
            }
            .fin-bottom{
                margin-top:0.32rem;
            }
            .supple{
                width:0.59rem;
                padding-left:0.08rem;
                margin:0.23rem 0 0 2.56rem;
                background:linear-gradient(270deg,rgba(96,58,236,1) 0%,rgba(49,131,238,1) 100%);
                border-radius:0.02rem;
                display:flex;
                span:first-child{
                    font-size:0.13rem;
                    line-height:0.18rem;
                    color:#fff;
                }
                span:last-child{
                    width:0.16rem;
                    height:0.16rem;
                    margin-left:0.03rem;
                    background:url(${props=>props.buqian}) no-repeat;
                    background-size:100%;
                }
            }

        }
        .space{
            height:0.55rem;
            width:100%;
        }
        .mask{
            position:fixed;
            top:0;
            bottom:-0.49rem;
            left:0;
            right:0;
            display:flex;
            justify-content:center;
            align-items:center;
            background:rgba(0,0,0,0.5);
            display:none;
            .mask-card{
                width:3.15rem;
                height:1.67rem;
                padding-top:0.21rem;
                background:rgba(254,252,252,1);
                border-radius:0.2rem;
                display:flex;
                flex-direction:column;
                align-items:center;
                p{
                 font-size:0.18rem;
                 color:#262626;
                 line-height:0.25rem;
                 text-align:center;   
                }
                .sure{
                    width:2.76rem;
                    height:0.36rem;
                    background:#FCB408;
                    border-radius:0.1rem;
                    font-size:0.16rem;
                    color:#fff;
                    text-align:center;
                    border:0;
                    margin-top:0.29rem;
                }
                .cancle{
                    margin-top:0.10rem;
                    border:0;
                    background:#fff;
                    font-size:0.16rem;
                    color:#FCB408;
                }
            }
        }
    }
`
export{
    ProstyContainer
}