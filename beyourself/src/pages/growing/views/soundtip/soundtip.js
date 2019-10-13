import styled from 'styled-components';
import border1px from 'components/border';
const SoundTipStyContainer=styled.div`
    width:100%;
    height:100%;
    background:#fff;
    display:flex;
    flex-direction:column;
    .am-navbar{
        .am-navbar-left-icon{
            color:#FCB408 !important;
        }
        use{
            width:0.12rem;
            height:0.22rem;
            
        }
        .am-navbar-title{
        font-size:0.18rem;
        color:#262626;
        height:0.18rem;
        line-height:0.18rem;
        font-weight:600;
        }
    }
    .wrapper{
        flex:1;
        padding-top:0.18rem;
    }
    
`
const OutWrapper=border1px({
    width:'1px 0 0 0',comp:styled.div`
        flex:1;
        padding-top:0.18rem;
        .am-list-item{
            height:0.41rem;
            font-size:0.18rem;
            .am-radio-inner::after{
                border-color: #FCB408 !important;
            }
        }
    
    `
})
export {SoundTipStyContainer,OutWrapper}