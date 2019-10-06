import styled from 'styled-components'

const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
`

const HeadContainer = styled.div` 
  height:2.00rem;
  border-radius:.14rem .14rem 0rem 0rem;
  background-image: url(http://a2.qpic.cn/psb?/V14bP3rD4bc7Q4/YbImYi*eIMmEoVx2N5U2w1fq4khH1A3aaM4Bk9*s*RA!/m/dEkBAAAAAAAAnull&bo=ZQRtAgAAAAADByw!&rf=photolist&t=5);
  background-size: cover;
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

export {
  BodyContainer,
  HeadContainer
}