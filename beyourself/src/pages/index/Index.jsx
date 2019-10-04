import React, { PureComponent } from 'react'

import { Container , Header , Main , Footer } from './index_css'

export default class Index extends PureComponent {
    render() {
        return (
            <Container>
                <Header>header</Header>
                <Main>main</Main>
                <Footer>footer</Footer>
            </Container>  
        )
    }
}
