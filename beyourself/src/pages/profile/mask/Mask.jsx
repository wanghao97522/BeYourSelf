import React, { Component } from 'react';

import {CSSTransition} from 'react-transition-group'

import {MaskContainer} from './styledMask'

class Mask extends Component {
    render() {
        return (
            <MaskContainer onClick={()=>this.props.onClick()} isShow={this.props.nowState}>
                <CSSTransition
                    classNames={{
                        enter:'animated',
                        enterActive:'fadeInUp',
                        exit:'animated',
                        exitActive:'fadeInDown'
                    }}
                    timeout={1000}
                >
                    <footer>
                        
                        {/* <div className="txt">支付方式</div>
                        <ul>
                            <li className='wechat'></li>
                            <li className='alipy'></li>
                        </ul> */}
                    </footer>
                </CSSTransition>
            </MaskContainer>
        );
    }
}

export default Mask;