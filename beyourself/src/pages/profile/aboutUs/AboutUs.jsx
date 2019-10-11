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
                <div className='title'>
                    <div className="circle"></div>
                    <div className='txt'>关于Beyourself</div>
                </div>
                <div className='article'>
                    <p className="firstP">
                        在我们的生活里,有时候一个习惯的养成必须要达到两个星期才会慢慢的养成,如果没有一个监督你的人的话,就会更加难以坚持下去,
                        然而这款APP就可以帮到你,只需要在里面设置下习惯和提醒音乐,同时你也可以设置你的睡眠时间,让你的每一天都有一个好的状态。
                    </p>
                    <p className="secP">
                        在任何时刻,无论感到多么迷失,我们都可以在爱与存在中寻找心灵的依靠。我们只需要暂停一切且深呼吸,然后打开内心深处寻找让你感到活着的经验。
                        在敞开心扉并领悟人生后,我们将能找回自身的平静与自由。
                    </p>
                </div>
            </AboutUsContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }
}

export default AboutUs;