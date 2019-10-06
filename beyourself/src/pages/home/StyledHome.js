import styled from 'styled-components'

const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
`
const HeadContainer = styled.div`
  height: .44rem;
  width: 100%;
  margin-top: .2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 .15rem;
  align-items: center;
  .head-index{
    width: 40px;
    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Semibold,PingFangSC;
    font-weight: 600;
    color: rgba(0,0,0,1);
    line-height: 28px;
  }
`
const MainContainer = styled.div`
  margin: 0 .15rem;
`

const CubeOneContainer = styled.div`
  background-image: url(http://a3.qpic.cn/psb?/V14bP3rD4bc7Q4/0gpDBMu3scVNmCJtgdC7t3.93YsNRqn0QvX6DqNd77M!/m/dFIBAAAAAAAAnull&bo=CwSkAQAAAAADB4g!&rf=photolist&t=5);
  margin-top: .2rem;
  width:345px;
  height:140px;
  background-size: contain;
  border-radius:14px;
  position: relative;
  a{
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  h1{
    width:109px;
    height:25px;
    font-size:18px;
    font-family:PingFangSC-Semibold,PingFangSC;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:25px;
    margin-left: .16rem;
    margin-top: .16rem;
  }
  p{
    width:205px;
    height:40px;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-left: .16rem;
    text-align: left;
  }
  .cube-page{
    display: flex;
    position: absolute;
    bottom: .11rem;
    left: 50%;
    margin-left: -.45rem;
    div{
      width:22px;
      height:22px;
      background:rgba(0,1,96,0.5);
      border-radius: 100%;
      margin-right: .12rem;
      span{
        width:6px;
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:20px;
      }
    }
  }
`

const AddContainer = styled.div`
    height: .22rem;
    width: .22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    div{
      background: rgba(252,180,8,1);
      border-radius: 100px;
      &.across{
        height: .02rem;
        width: .22rem;
      }
      &.upright{
        height: .02rem;
        width: .22rem;
        position: absolute;
        transform: rotate(90deg);
      }
    }
`

export {
  BodyContainer,
  HeadContainer,
  AddContainer,
  CubeOneContainer,
  MainContainer
}