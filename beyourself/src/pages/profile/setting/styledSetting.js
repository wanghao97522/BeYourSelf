import styled from 'styled-components'
import border from 'components/border.js'

import back from 'assets/images/profile/fanhui@2x.png'
import aboutUs from 'assets/images/profile/guanyuwomen.icon@2x.png'
import personal from 'assets/images/profile/gerenziliao.icon@2x.png'
import help from 'assets/images/profile/wenti.icon@2x.png'
import jiantou from 'assets/images/profile/jiantou@2x.png'

const SettingContainer = styled.div`
    .exit{
        height:.44rem;
        background:#fff;
        line-height:.44rem;
        text-align:center;
        margin-top:.2rem;
        font-size:.16rem;
        color:#333333;
    }
`

const HeaderContainer = border({
    width:'0 0 1px 0',
    color:'#E4E4#E4',
    comp:styled.header`
        padding:0 .15rem;
            height: .44rem;
            background:#fff;
            display:flex;
            align-items:center;
            .back{
                width:.13rem;
                height:.22rem;
                background:url(${back}) no-repeat center;
                background-size:100% 100%;
            }
            h2{
                flex:1;
                text-align:center;
                font-size:.18rem;
                line-height:.25rem;
                color:#333;
            }
    `
})

const NavContainer = styled.nav`
    ul{
        li{
            width:100%;
            height: .5rem;
            /* margin-top:.1rem; */
            display:flex;
            padding:0 .15rem;
            display:flex;
            align-items:center;
            background:#fff;
            margin-top:.1rem;
            .bg_icon{
                width:.22rem;
                height:.22rem;
                margin-left: .04rem;
            }
            .txt{
                font-size:.16rem;
                line-height:.22rem;
                height: .22rem;
                margin-left:.1rem;
                color:#333;
                flex:1;
            }
            .right_jt{
                width:.08rem;
                height: .14rem;
                background:url(${jiantou}) no-repeat center;
                background-size:100% 100%;
            }
        }
        .aboutUs{
            .bg_icon{
                background:url(${aboutUs}) no-repeat center;
                background-size:100% 100%;
            }
        }
        .personal{
            .bg_icon{
                background:url(${personal}) no-repeat center;
                background-size:100% 100%;
            }
        }
        .help{
            .bg_icon{
                background:url(${help}) no-repeat center;
                background-size:100% 100%;
            }
        }
    }
`




export {
    SettingContainer,
    HeaderContainer,
    NavContainer
}