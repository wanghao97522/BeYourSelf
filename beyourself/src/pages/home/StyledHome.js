import styled from 'styled-components'

import bgTrip from 'assets/images/home/bg-trip@3x.png'
import bgEveryday from 'assets/images/home/bg-everyday@3x.png'
import bgMorning from 'assets/images/home/bg-morning@3x.png'
import bgAfternoon from 'assets/images/home/bg-afternoon@3x.png'
import bgNight from 'assets/images/home/bg-night@3x.png'
import bgOthers from 'assets/images/home/tuu@3x.png'

const BodyContainer = styled.div`
  height: 100%;
  overflow: scroll;
  background: #fff;
  display: flex;
  flex-direction: column;
`

const HeadContainer = styled.div`
  height: .44rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .08rem .15rem;
  .head-index{
    width: max-content;
    height: .28rem;
    font-size: .20rem;
    font-family: PingFangSC-Semibold,PingFangSC;
    font-weight: 600;
    color: rgba(0,0,0,1);
    line-height: .28rem;
  }
    img{
      display: inline-block;
      width: .22rem;
      height: .22rem;
    }
`

const MainContainer = styled.div`
  margin: 0 .15rem;
  /* overflow: scroll; */
  position: relative;
`

const CubeOneContainer = styled.div`
  background-image: url(${bgTrip});
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
    width:max-content;
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
  background-image: url(${bgEveryday});
  background-size: contain;
  position: relative;
  a{
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  h1{
    width:max-content;
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
    width:max-content;
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
    h1.today{
      margin:0;
      width:max-content;
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
      width:max-content;
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
      background-image: url(${bgMorning});
      background-size: contain;
    }
    span{
      color:rgba(252,180,8,1);
    }
  }
  .noon{
    .habits{
      background-image: url(${bgAfternoon});
      background-size: contain;
    }
    span{
      color:rgba(245,30,100,1);
    }
  }
  .afternoon{
    .habits{
      background-image: url(${bgNight});
      background-size: contain;
    }
    span{
      color:rgba(68,115,247,1);
    }
  }
  .others{
    .habits{
      background-image: url(${bgOthers});
      background-size: cover;
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
  CubeOneContainer,
  MainContainer,
  CubeTwoContainer,
  TodayContainer,
  HabitContainer,
  GrayCirclContainer,
  EmptyContainer
}