import React, { Component } from 'react';
import { AboutUsContainer } from './styledAboutUs'

import photo from 'assets/images/profile/tupian@2x.png'

class AboutUs extends Component {
    render() {
        return (
            <AboutUsContainer>
                <header>
                    <div className='back' onClick={()=>this.back()}>
                    </div>
                    <h2>关于我们</h2>    
                </header>
                <div className="banner">
                    <img src={photo} alt=""/>
                </div>
            </AboutUsContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }
}

export default AboutUs;