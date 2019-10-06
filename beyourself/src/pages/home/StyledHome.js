import styled from 'styled-components'

const BodyContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  display: flex;
  flex-direction: column;
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
      border-radius: 1.00rem;
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

const HeadContainer = styled.div`
  height: .44rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 .15rem;
  align-items: center;
  .head-index{
    width: .40rem;
    height: .28rem;
    font-size: .20rem;
    font-family: PingFangSC-Semibold,PingFangSC;
    font-weight: 600;
    color: rgba(0,0,0,1);
    line-height: .28rem;
  }
`

const MainContainer = styled.div`
  margin: 0 .15rem;
  overflow-y: auto;
  position: relative;
`

const CubeOneContainer = styled.div`
  background-image: url(http://a3.qpic.cn/psb?/V14bP3rD4bc7Q4/0gpDBMu3scVNmCJtgdC7t3.93YsNRqn0QvX6DqNd77M!/m/dFIBAAAAAAAAnull&bo=CwSkAQAAAAADB4g!&rf=photolist&t=5);
  margin-top: .2rem;
  width:3.45rem;
  height:1.40rem;
  background-size: contain;
  border-radius:.14rem;
  position: relative;
  a{
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  h1{
    width:1.09rem;
    height:.25rem;
    font-size:.18rem;
    font-family:PingFangSC-Semibold,PingFangSC;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:.25rem;
    margin-left: .16rem;
    margin-top: .16rem;
  }
  p{
    width:2.05rem;
    height:.40rem;
    font-size:.14rem;
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
    text-align: center;
    left: 50%;
    margin-left: -.45rem;
    div{
      width:.22rem;
      height:.22rem;
      background:rgba(0,1,96,0.5);
      border-radius: 100%;
      margin-right: .12rem;
      span{
        width:.6rem;
        height:.20rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:.20rem;
      }
    }
  }
`

const CubeTwoContainer = styled.div`
  margin-top: .21rem;
  width:3.45rem;
  height:2.40rem;
  border-radius:.14rem;
  background-image: url(http://a3.qpic.cn/psb?/V14bP3rD4bc7Q4/6xsjxijWvldykhb8wHAiNEjGUwBqthgue7h5*ApKlUs!/m/dLYAAAAAAAAAnull&bo=CwTQAgAAAAADB*8!&rf=photolist&t=5);
  background-size: contain;
  position: relative;
  a{
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  h1{
    width:1.09rem;
    height:.25rem;
    font-size:.18rem;
    font-family:PingFangSC-Semibold,PingFangSC;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:.25rem;
    margin-left: .16rem;
    margin-top: 1.07rem;
  }
  p{
    width:2.05rem;
    height:.40rem;
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-left: .16rem;
    text-align: left;
  }
  div{
    position: absolute;
    bottom: .16rem;
    left: 50%;
    margin-left: -.24rem;
    width:.48rem;
    height:.17rem;
    font-size:.12rem;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:.17rem;
  }
`

const TodayContainer = styled.div`
    margin-top: .16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      width:.37rem;
      height:.25rem;
      font-size:.18rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(0,0,0,1);
      line-height:.25rem;
    }
    span{
      width:.50rem;
      height:.04rem;
      background:rgba(132,209,162,1);
      border-radius:.14rem;
    }
`

const HabitContainer = styled.div`
  img{
    display: inline-block;
    width: .22rem;
    height: .22rem;
    margin-right: .18rem;
  }
  span{
    width:.49rem;
    height:.17rem;
    font-size:.12rem;
    font-family:PingFangSC-Medium,PingFangSC;
    font-weight:500;
    line-height:.17rem;
  }
  .habits{
    width:3.04rem;
    height:.44rem;
    border-radius:.14rem;
    display: flex;
    align-items: center;
    margin:.16rem 0 .16rem .4rem;
    h1{
      width:.73rem;
      height:.25rem;
      font-size:.18rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:.25rem;
      margin-left: .16rem;
    }
  }
  .morning{
    margin-top: .12rem;
    .habits{
      background-image: url(http://a3.qpic.cn/psb?/V14bP3rD4bc7Q4/7gbSOFb7l9Lk*ANc*YxUNWXMGmgz7jLORN5tu9gzxes!/m/dL4AAAAAAAAAnull&bo=kAOEAAAAAAADBzU!&rf=photolist&t=5);
      background-size: contain;
    }
    span{
      color:rgba(252,180,8,1);
    }
  }
  .noon{
    .habits{
      background-image: url(http://a4.qpic.cn/psb?/V14bP3rD4bc7Q4/l2TAeigQ5knLo1Xa3QwdhJEms5nCOnHd8fmqIlMg0Lw!/m/dMMAAAAAAAAAnull&bo=kAOEAAAAAAADBzU!&rf=photolist&t=5);
      background-size: contain;
    }
    span{
      color:rgba(245,30,100,1);
    }
  }
  .afternoon{
    .habits{
      background-image: url(http://a3.qpic.cn/psb?/V14bP3rD4bc7Q4/8e7MeyMjqEkTgy.vk1oVqJ6.3b0X6aCVRFFJxxjc91Q!/m/dLYAAAAAAAAAnull&bo=kAOEAAAAAAADBzU!&rf=photolist&t=5);
      background-size: contain;
    }
    span{
      color:rgba(68,115,247,1);
    }
  }
`

const GrayCirclContainer = styled.div`
  div{
    position: absolute;
    width:.06rem;
    height:.06rem;
    background:rgba(216,216,216,1);
  }
`

const EmptyContainer = styled.div`
  height: .5rem;
`


export {
  BodyContainer,
  HeadContainer,
  AddContainer,
  CubeOneContainer,
  MainContainer,
  CubeTwoContainer,
  TodayContainer,
  HabitContainer,
  GrayCirclContainer,
  EmptyContainer
}