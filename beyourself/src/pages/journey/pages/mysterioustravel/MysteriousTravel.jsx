import React, { Component } from 'react'
import { Body, Bg, Title , DegreeOfCompletion, Done, Doing, Word } from './m_travel';

export default class MysteriousTravel extends Component {
    render() {
        return (
            <Body>
                <Bg>
                    <Title></Title>
                    <DegreeOfCompletion>
                        <Done>
                            <Word>0%</Word>
                            <Word>完成</Word>
                        </Done>
                        <Doing>
                            <Word>0/15</Word>
                            <Word>成就实现</Word>
                        </Doing>
                    </DegreeOfCompletion>
                </Bg>
            </Body>
        )
    }
}
