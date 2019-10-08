import styled from 'styled-components'

import border from '../../../components/border'

const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
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
  padding: .11rem 0 .11rem .15rem;
  img{
    display: inline-block;
    width:.22rem;
    height:.22rem;
  }
  input{
    margin-left: .16rem;
    height:.20rem;
    line-height:.20rem;
    border: none;
  }
  input::placeholder{
    font-size:.14rem;
    font-family:PingFangSC-Regular,PingFangSC;
    font-weight:400;
    color:rgba(174,174,174,1);
  }
`

const BorderSearchContainer = border({
  comp: SearchContainer,
  color: '#ECECEC'
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

export{
  BodyContainer,
  MainContainer,
  BorderSearchContainer,
  TaskListContainer
}