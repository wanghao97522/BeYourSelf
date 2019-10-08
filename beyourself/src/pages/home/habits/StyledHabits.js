import styled from 'styled-components'

const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
`

const HeadContainer = styled.div` 
  .morning{
  height: 100%;
  background-image: url(http://a2.qpic.cn/psb?/V14bP3rD4bc7Q4/YbImYi*eIMmEoVx2N5U2w1fq4khH1A3aaM4Bk9*s*RA!/m/dEkBAAAAAAAAnull&bo=ZQRtAgAAAAADByw!&rf=photolist&t=5);
  background-size: cover;

  }
  .noon{
    height: 100%;
    background-image: url(http://a1.qpic.cn/psb?/V14bP3rD4bc7Q4/LEqdw7cl0xKsgvdbOlWsmUsKKXCqafv3KV1qxAvbjhA!/m/dLgAAAAAAAAAnull&bo=ZQRqAgAAAAADBys!&rf=photolist&t=5);
    background-size: cover;
  }
  .afternoon{
    height: 100%;
    background-image: url(http://a1.qpic.cn/psb?/V14bP3rD4bc7Q4/R1AxeLjieJ0FZSsY1XlmzcewSRE5bK7ibAelYBDEgM0!/m/dFABAAAAAAAAnull&bo=ZQRqAgAAAAADBys!&rf=photolist&t=5);
    background-size: cover;
  }
  height:2.00rem;
  border-radius:.14rem .14rem 0rem 0rem;
  position: relative;
  .title-container{
    display: flex;
    position: relative;
    .back{
      width:.13rem;
      height:.22rem;
      background-image: url(http://a1.qpic.cn/psb?/V14bP3rD4bc7Q4/tkAgyYnyNb3H8bY3iO6qLZuimJIPq5Gwn7oPk61dy4k!/m/dMQAAAAAAAAAnull&bo=JwBCAAAAAAADB0c!&rf=photolist&t=5);
      background-size: cover;
      margin-top: .16rem;
      margin-left: .15rem;
    }
    .title{
      width:.73rem;
      height:.25rem;
      font-size:.18rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:.25rem;
      position: absolute;
      left: 50%;
      margin-left: -.365rem;
      margin-top: .16rem;
    }
  }
  .time-container{
    position: absolute;
    bottom: .16rem;
    .notice{
      margin-left: .15rem;
      background-image: url(http://a2.qpic.cn/psb?/V14bP3rD4bc7Q4/CB9PsSoE.Aw.hBfI67d1a0P0EWWzV0nNZlaQNISaksI!/m/dFEBAAAAAAAAnull&bo=QgBCAAAAAAADByI!&rf=photolist&t=5);
      background-size: .22rem .22rem;
      background-repeat: no-repeat;
      span{
        width:.55rem;
        height:.25rem;
        font-size:.18rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.25rem;
        margin-left: .38rem;
      }
    }
    .time{
      width:.61rem;
      height:.20rem;
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(255,255,255,0.73);
      line-height:.20rem;
      margin-left: .53rem;
    }
  }
`

const TaskNumContainer = styled.div`
  padding: .16rem;
  p{
    margin-left: .45rem;
    display: flex;
    justify-content: space-between;
    span{
      flex: 1;
      height:.25rem;
      font-size:.18rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:.25rem;
    }
    .add{
      display: inline-block;
      height: .22rem;
      width: .22rem;
      background-image: url(http://a4.qpic.cn/psb?/V14bP3rD4bc7Q4/IJdnBMNwwskgVXJjS2iVxVE9u4QK1hE687qVpHaVmiM!/m/dL8AAAAAAAAAnull&bo=QgBCAAAAAAADByI!&rf=photolist&t=5);
      background-size: cover;
    }
    .more{
      display: inline-block;
      margin-left: .16rem;
      height: .22rem;
      width: .21rem;
      background-image: url(http://a1.qpic.cn/psb?/V14bP3rD4bc7Q4/Wgbr7pYHJudP1MPCYzwhsx5djCDypjV0vfLHHo4Pjsk!/m/dLgAAAAAAAAAnull&bo=QgAMAAAAAAADB2w!&rf=photolist&t=5);
      background-size: .22rem;
      background-repeat: no-repeat;
      background-position: center;
    }
    &.time{
      width:max-content;
      height:.2rem;
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:.2rem;
    }
  }
`

const OpenBTContainer = styled.div`
  display: flex;
  justify-content: center;
  div{
    width:3.45rem;
    height:.44rem;
    border-radius:.14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &.morning{
      background:linear-gradient(180deg,rgba(57,111,204,1) 0%,rgba(58,211,175,1) 100%);
    }
    &.noon{
      background:linear-gradient(180deg,rgba(224,30,132,1) 0%,rgba(245,128,167,1) 100%);
    }
    &.afternoon{
      background:linear-gradient(180deg,rgba(54,112,219,1) 0%,rgba(141,89,182,1) 100%);
    }
    span{
      width:1.28rem;
      height:.22rem;
      font-size:.16rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:.22rem;
    }
  }
`

export {
  BodyContainer,
  HeadContainer,
  TaskNumContainer,
  OpenBTContainer
}