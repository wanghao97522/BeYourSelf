import styled from 'styled-components'

import bgMorningHabit from 'assets/images/home/bg-zaochenxiguan@3x.png'
import bgNoonHabit from 'assets/images/home/bg-xiawuxiguan@3x.png'
import bgAfternonnHabit from 'assets/images/home/bg-huanghunxiguan@3x.png'
import iconAdd from 'assets/images/home/icon-tianjia@3x.png'
import iconBack from 'assets/images/home/icon-fanhui@3x.png'
import iconTime from 'assets/images/home/icon-naozhong@3x.png'
import iconMore from 'assets/images/home/icon-bianjilan@3x.png'
import bgEmpty from 'assets/images/home/bg-hanakongxingye@3x.png'
import bgOpenMyBT from 'assets/images/home/bg-bang@3x.png'
import bgSuccess from 'assets/images/home/Group@3x.png'


const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
  overflow: scroll;
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
      width:.14rem;
      height:.20rem;
    }
    .icon-status{
      display: inline-block;
      width:.22rem;
      height:.22rem;
    }
    span{
      flex: 1;
      padding-left: .2rem;
      height:.20rem;
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(73,73,73,1);
      line-height:.20rem;
    }
  }
`

const EmptyTaskContainer = styled.div`
  width:2.49rem;
  height:2.10rem;
  background-image: url(${bgEmpty});
  background-size: cover;
  margin: .52rem .63rem 0 .63rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    width:max-content;
    height:.22rem;
    font-size:.16rem;
    font-family:PingFangSC-Semibold,PingFangSC;
    font-weight:600;
    color:rgba(119,119,119,1);
    line-height:.22rem;
  }
`

const OpenMyTBContainer = styled.div`
  height: 100%;
  overflow: scroll;
  background-image: url(${bgOpenMyBT});
  background-size: cover;
  padding: .16rem .15rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  .head{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      display: inline-block;
      width:.13rem;
      height:.22rem;
      &.horn{
        width: .2rem;
        height: .18rem;
      }
    }
  }
  .title{
    width:100%;
    height:.25rem;
    font-size:.18rem;
    font-family:PingFangSC-Semibold,PingFangSC;
    font-weight:600;
    color:rgba(201,201,201,1);
    line-height:.25rem;
    text-align: center;
    margin-top: 1.73rem;
  }
  .bottom{
    margin-top: .7rem;
    width: 100%;
    /* display: flex;
    justify-content: center;
    flex-direction: column; */

    .up{
      text-align: center;
      img{
        display: inline-block;
        width:.22rem;
        height:.13rem;
      }
    }
    .text{
      width:3.45rem;
      height:.49rem;
      background:rgba(80,161,206,0.1);
      border-radius:.14rem;
      text-align: center;
      line-height: .49rem;
      font-size:.16rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      color:rgba(201,201,201,1);
      margin-top: .16rem;
    }
    .date{
      width:3.45rem;
      height:.79rem;
      background:rgba(80,161,206,0.1);
      border-radius:.14rem .14rem 0rem 0rem;
      text-align: center;
      line-height: .79rem;
      margin-top: .16rem;
      span{
        display: inline-block;
        width:.60rem;
        height:.30rem;
        background:rgba(216,216,216,0.15);
        border-radius:.14rem;
        text-align: center;
        line-height: .3rem;
        font-size:.14rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:600;
        color:rgba(201,201,201,1);
      }
    }
    .countdown{
      width:3.45rem;
      height:.49rem;
      background:rgba(80,161,206,0.1);
      margin-top: .05rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      p{
        display: flex;
        justify-content: center;
        align-items: center;
        audio{
          position: absolute;
          z-index: 99;
          right: -1.42rem;
        }
        span{
          width:max-content;
          height:.25rem;
          font-size:.18rem;
          font-family:PingFangSC-Semibold,PingFangSC;
          font-weight:600;
          color:rgba(201,201,201,1);
          line-height:.25rem;
        }
        img{
          display: inline-block;
          width:.14rem;
          height:.16rem;
          margin-left: .12rem;
        }
      }
    }
    .success-container{
      width:3.45rem;
      height:.79rem;
      margin-top: .05rem;
      background:rgba(80,161,206,0.1);
      border-radius:0rem 0rem .14rem .14rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: .14rem .5rem;
      .common{
        height: .48rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img{
          display: inline-block;
          width:.19rem;
          height:.18rem;
        }
        span{
          width:max-content;
          height:.22rem;
          font-size:.16rem;
          font-family:PingFangSC-Semibold,PingFangSC;
          font-weight:600;
          color:rgba(201,201,201,1);
          line-height:.22rem;
        }
      }
      .success{
        width:1.17rem;
        height:.52rem;
        border-radius:.28rem;
        margin: 0 .33rem;
        background-image: url(${bgSuccess});
        background-size: cover;
      }
    }
  }
`



export {
  BodyContainer,
  HeadContainer,
  TaskNumContainer,
  OpenBTContainer,
  TaskContainer,
  EmptyTaskContainer,
  OpenMyTBContainer,
}