import styled from 'styled-components'


const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: #166AD6;
`

const Title = styled.div`
    height: .51rem;
    line-height: .25rem;
    font-size: .18rem;
    color: white;
    padding-top: .29rem;
    div{
        display: inline-block;
        img{
            height: .2rem;
            width: .11rem;
            margin-left: .15rem;
        }
        &.title{
            margin-left: 1.43rem
        }
    }  
`

const Task = styled.div`
    height: 1.7rem;
    width: 3.45rem;
    background: white;
    border-radius: .14rem;
    margin: 0 .15rem .1rem .15rem ;
    overflow: hidden;
    .percent{
        display: inline-block;
        height: .6rem;
        width: .6rem;
        line-height: .6rem;
        font-size: .15rem;
        background: #1B3FA0;
        color: white;
        float: right;
        text-align: center;
        border-radius: 0 0 0 90%;
    }
    .title{
        width: max-content;
        font-size: .2rem;
        line-height: .28rem;
        margin: .2rem 0 0 .2rem;
        color: black;
    }
    .se_title{
        width: max-content;
        font-size: .18rem;
        line-height: .25rem;
        margin: 0 0 0 .2rem;
        color: black;
    }
    .enter{
        height: .2rem;
        width: .11rem;
        margin: .02rem 0 0 3.05rem;
        >img{
            height: 100%;
            width: 100%;
        } 
    }
    .carryout{
        margin-top: .33rem;
        text-align: center;
        color: #447184;
        >img{
            height: .12rem;
            width: .15rem;
            margin-right: .03rem;
        }
    }
`
const TopDiv = styled.div`
    height: 3.61rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo{
        height: .5rem;
        width: .4rem;
        margin: .8rem 0 .07rem 0;
        text-align: center;
        display: flex;
        >img{
            height: .5rem;
            width: .4rem;
            flex: 1;
        }
    }
    .title{
        color: white;
        font-size: .2rem;
        text-align: center;
    }
    .tips{
        margin: .14rem;
        color: white;
        font-size: .16rem;
        text-align: center;
    }
    .bord{
        width:1.12rem;
        height:.02rem;
        border:.01rem solid rgba(233,234,233,1);
    }
    .introduce{
        margin: .14rem;
        color: white;
        font-size: .16rem;
        text-align: center;
    }
    button{
        height: .44rem;
        width: 3.45rem;
        color: #1E8AB9;
        margin-top: .8rem;
        background-color: white;
        font-size: .18rem;
        line-height: .44rem;
        border: 0;
        border-radius: .14rem;
    }
`
const BtmDiv = styled.div`
    height: 2.55rem;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .rules{
        color: black;
        font-size: .16rem;
        text-align: center;
        margin-top: .21rem;
    }
    ul{
        display: flex;
        align-items: center;
        margin-top: .26rem;
        li{
            height: .34rem;
            width: .34rem;
            border-radius: 50%;
            background: #E5E5E5;
            font-size: .14rem;
            color: #AEAEAE;
            text-align: center;
            line-height: .34rem;
        }
    }
    button{
        height: .44rem;
        width: 3.45rem;
        color: white;
        margin-top: .8rem;
        background: #FCB408;
        border: 0;
        border-radius: .14rem;
        font-size: .16rem;
    }
    .why{
        width: .64rem;
        height: .22rem;
        font-size: .16rem;
        font-family: PingFangSC-Regular,PingFangSC;
        font-weight: 400;
        color: rgba(32,123,176,1);
        line-height: .22rem;
        margin: .41rem 0 .58rem 0;
    }
    .cus{
        width: 3.20rem;
        height: .66rem;
        font-size: .16rem;
        font-family: PingFangSC-Regular,PingFangSC;
        font-weight: 400;
        color: rgba(36,36,36,1);
        line-height: .22rem;
        margin: 0 .28rem;
    }
    .set{
        width: 3.16rem;
        height: .44rem;
        font-size: .16rem;
        font-family: PingFangSC-Regular,PingFangSC;
        font-weight: 400;
        color: rgba(36,36,36,1);
        line-height: .22rem;
    }
`

export { Container , Title , Task , TopDiv , BtmDiv }