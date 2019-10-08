import React from 'react';
import LetterstyContainer from './letter';
export default (props)=>{
    return (
        <LetterstyContainer>
            <div className="bg">
                <div className="bgtop">
                    <span></span>
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
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </LetterstyContainer>
    )
}