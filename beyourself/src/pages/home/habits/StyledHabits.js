import styled from 'styled-components'

import bgMorningHabit from '../../../assets/images/home/bg-zaochenxiguan@3x.png'
import bgNoonHabit from '../../../assets/images/home/bg-xiawuxiguan@3x.png'
import bgAfternonnHabit from '../../../assets/images/home/bg-huanghunxiguan@3x.png'
import iconAdd from '../../../assets/images/home/icon-tianjia@3x.png'
import iconBack from '../../../assets/images/home/icon-fanhui@3x.png'
import iconTime from '../../../assets/images/home/icon-naozhong@3x.png'
import iconMore from '../../../assets/images/home/icon-bianjilan@3x.png'

const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
`

const HeadContainer = styled.div` 
  .morning{
  height: 100%;
  background-image: url(${bgMorningHabit});
  background-size: cover;

  }
  .noon{
    height: 100%;
    background-image: url(${bgNoonHabit});
    background-size: cover;
  }
  .afternoon{
    height: 100%;
    background-image: url(${bgAfternonnHabit});
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
      background-image: url(${iconBack});
      background-size: cover;
      margin-top: .16rem;
      margin-left: .15rem;
    }
    .title{
      width:max-content;
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
      background-image: url(${iconTime});
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
      width:max-content;
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
      background-image: url(${iconAdd});
      background-size: cover;
    }
    .more{
      display: inline-block;
      margin-left: .16rem;
      height: .22rem;
      width: .21rem;
      background-image: url(${iconMore});
      background-size: .22rem;
      background-repeat: no-repeat;
      background-position: center;
    }
    &.time{
      width:max-content;
      height:.20rem;
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(0,0,0,1);
      line-height:.20rem;
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
      width:max-content;
      height:.22rem;
      font-size:.16rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:.22rem;
    }
  }
`

const TaskContainer = styled.div`
  padding: .32rem .15rem 0 .15rem;
  div{
    margin-bottom: .17rem;
    display: flex;
    .icon-task{
      display: inline-block;
      width:14px;
      height:20px;
    }
    .icon-status{
      display: inline-block;
      width:22px;
      height:22px;
    }
    span{
      flex: 1;
      padding-left: .2rem;
      height:20px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(73,73,73,1);
      line-height:20px;
    }
  }
`

export {
  BodyContainer,
  HeadContainer,
  TaskNumContainer,
  OpenBTContainer,
  TaskContainer
}