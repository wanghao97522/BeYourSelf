import styled from 'styled-components'

import border from 'components/border'

import iconClose from 'assets/images/home/icon-quxiao@3x.png'
import iconMore from 'assets/images/home/icon-bianjilan@3x.png'


const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
  overflow: scroll;
`

const MainContainer = styled.div`
  .head{
    height:.44rem;
    background:rgba(255,255,255,1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .title{
      width:max-content;
      height:.25rem;
      font-size:.18rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(38,38,38,1);
      line-height:.25rem;
    }
    .done{
      position: absolute;
      right: .15rem;
      width:max-content;
      height:.22rem;
      top: 50%;
      margin-top: -.11rem;
      font-size:.16rem;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(252,180,8,1);
      line-height:.22rem;
    }
  }
`

const SearchContainer = styled.div`
  height:.44rem;
  background:rgba(255,255,255,1);
  padding: .11rem .15rem .11rem .15rem;
  display: flex;
  align-items: center;
  img{
    display: inline-block;
    width:.22rem;
    height:.22rem;
  }
  input{
    flex: 1;
    margin-left: .16rem;
    height:.20rem;
    line-height:.20rem;
    border: none;
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(0,0,0,1);
  }
  input::placeholder{
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(174,174,174,1);
  }
  i{
    display: inline-block;
    width: .13rem;
    height: .13rem;
    background-image: url(${iconClose});
    background-size: cover;
  }
`

const BorderSearchContainer = border({
  comp: SearchContainer,
  color: '#ECECEC',
  width: '1px. 0px. 1px. 0px'
})

const TaskListContainer = styled.div`
  div.container{
    padding: .16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      display: inline-block;
      width: .14rem;
      height: .2rem;
    }
    .text{
      flex: 1;
      margin-left: .2rem;
      .title{
        width:max-content;
        height:.20rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(73,73,73,1);
        line-height:.20rem;
      }
      .detail{
        width:max-content;
        height:.17rem;
        font-size:.12rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(174,174,174,1);
        line-height:.17rem;
      }
    }
    span{
      width:max-content;
      height:.20rem;
      font-size:.14rem;
      font-family:PingFangSC-Regular,PingFangSC;
      font-weight:400;
      line-height:.20rem;
      &.remove{
        color:rgba(252,180,8,1);
      }
      &.add{
        color:rgba(119,119,119,1);
      }
    }
  }
`

const TaskItemContainer = styled.div`
  height:.44rem;
  background:rgba(255,255,255,1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .15rem;
  img{
    display: inline-block;
    width: .22rem;
    height: .22rem;
    &.icon{
      width: .14rem;
    }
    &.icon-move{
      height: .14rem;
      width: .22rem;
    }
  }
  p{
    flex: 1;
    height:.20rem;
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(0,0,0,1);
    line-height:.20rem;
    margin-left: .16rem;
  }
  span{
    width:.61rem;
    height:.34rem;
    background:rgba(252,180,8,1);
    border-radius:.14rem;
    text-align: center;
    line-height: .34rem;
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(128,81,18,1);
  }
  i{
    display: inline-block;
    width: .21rem;
    height: .04rem;
    background-image:url(${iconMore});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  strong{
    margin-left: .2rem;
    width:max-content;
    height:.20rem;
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(73,73,73,1);
    line-height:.20rem;
  }
`

const BorderTaskItemContainer = border({
  comp: TaskItemContainer,
  color: '#ECECEC',
  width: '1px 0px 1px 0px'
})

const TaskTimeContainer = styled.div`
  .header{
    height:44px;
    display: flex;
    justify-content: center;
    position: relative;
    .title{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      span:nth-child(1){
        width:max-content;
        height:25px;
        font-size:18px;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:600;
        color:rgba(38,38,38,1);
        line-height:25px;
      }
      span:nth-child(2){
        width:max-content;
        height:17px;
        font-size:12px;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(174,174,174,1);
        line-height:17px;
      }
    }
    .done{
      position: absolute;
      right: .15rem;
      top: 50%;
      margin-top: -.11rem;
      width:max-content;
      height:22px;
      font-size:16px;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(252,180,8,1);
      line-height:22px;
    }
  }
`

const EmptyContainer = styled.div`
  height:20px;
  background:rgba(253,253,253,1);
`

const BoderEmptyContainer = border({
  comp: EmptyContainer,
  color: '#E7E7E7',
  width: '1px 0 1px 0'
})

export{
  BodyContainer,
  MainContainer,
  SearchContainer,
  BorderSearchContainer,
  TaskListContainer,
  BorderTaskItemContainer,
  TaskTimeContainer,
  BoderEmptyContainer
}