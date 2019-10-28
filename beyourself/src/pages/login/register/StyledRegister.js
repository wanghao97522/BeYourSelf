import styled from 'styled-components'
import bg from 'assets/images/login/background2@2x.png'
const RegisterContainer = styled.div`
    position:relative;
    height:100%;
    width:100%;
    background:url(${bg}) no-repeat center top / 100%;
    h2{
        margin-top:.97rem;
        margin-left:.2rem;
        font-size:.2rem;
        font-family:PingFangSC-Semibold,PingFangSC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:.28rem;
    }
    div:nth-child(3){
        margin-top:.41rem;
        margin-left:.2rem;
    }
    div:nth-child(6){
        position: absolute;
        top:3.43rem;
        left:.15rem;
    }
    >p{
        position:absolute;
        top:2.36rem;
        left:.3rem;
        font-size:.14rem;
        font-family:PingFangSC-Regular,PingFangSC;
        font-weight:400;
        color:rgba(252,180,8,1);
        line-height:.2rem;
    }
`
// getValidateCode() {
//     let state = this.state;
//     this.props.form.validateFields((err, values) => {
//         if (!err) {
//             if (!state.getCodeChange) {
//                 return
//             }
//             let count = state.count
//             const timer = setInterval(() => {
//                 this.setState({
//                     getCodeChange: false,
//                     count: (count--)
//                 }, () => {
//                     if (count === 0) {
//                         clearInterval(timer);
//                         this.setState({
//                             getCodeChange: true,
//                             count: 60
//                         })
//                     }
//                 })
//             }, 1000)
//             fetch.post('/api/vanke/getVerificationCode', {
//                 phone: values.tel
//             }).then((response) => {
//                 this.setState({
//                     smsValidateCode: response.results
//                 })
//             }).catch((err) => {
//                 Dialog.error({
//                     title: '错误',
//                     content: err.message
//                 });
//             });
//         }
//     });
// }

export {RegisterContainer}