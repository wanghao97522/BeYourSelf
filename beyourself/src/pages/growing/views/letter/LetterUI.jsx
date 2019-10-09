import React from 'react';
import {withRouter} from 'react-router-dom';
import LetterstyContainer from './letter';
export default withRouter((props)=>{
    function handelClick(){
        props.history.goBack();
    }
    return (
        <LetterstyContainer>
            <div className="bg">
                <div className="bgtop">
                    <span onClick={()=>{handelClick()}}></span>
                    <span></span>
                </div>
                <div className="bgbottom">
                    <p>第一天:</p>
                    <p>实施您的早晨惯例</p>
                </div>
            </div>
            <div className="lettertext">
                <p>
                  <span>2019年9月12日</span>
                  <span>3min</span>  
                </p>
                <p>亲爱的:</p>
                <p>欢迎来到Beyourself的世界!您已经开启了迈向健康,快乐和神清气爽的旅途。在这旅途中,Beyo-urself将成为您的专属教练，一路给您最忠实的指引。</p>
                <p>
                    <span>给您自己15天的时间。</span>
                    <span>我们会建议您一些经研究证明有效而简单的日常小运动。</span>
                </p>
                <p>2周后您会发现自己变得更有活力，感觉更充实，生产力也大大提高，并且培养成一种习惯,向美妙的生活迈进。</p>
            </div>
        </LetterstyContainer>
    )
})