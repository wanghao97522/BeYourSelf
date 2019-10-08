import styled from 'styled-components'

import border from '../../../components/border'

const BodyContainer = styled.div`
  height: 100%;
  background: #fff;
`

const MainContainer = styled.div`
  .head{
    height:44px;
    background:rgba(255,255,255,1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .title{
      width:max-content;
      height:25px;
      font-size:18px;
      font-family:PingFangSC-Semibold,PingFangSC;
      font-weight:600;
      color:rgba(38,38,38,1);
      line-height:25px;
    }
    .done{
      position: absolute;
      right: .15rem;
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

const SearchContainer = styled.div`
  height:44px;
  background:rgba(255,255,255,1);
`

const BorderSearchContainer = border({
  comp: SearchContainer,
  color: '#ECECEC'
})

export{
  BodyContainer,
  MainContainer,
  BorderSearchContainer
}