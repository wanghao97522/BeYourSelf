import React, { Component } from 'react'

import { Route , Switch , Redirect  } from 'react-router-dom'

import Index from './Index'
import Details from './Details'
import Page404 from './Page404'

import Morning from './home/habits/Morning'
import Noon from './home/habits/Noon'
import Afternoon from './home/habits/Afternoon'
import AddTask from './home/task/AddTask'
import ReEditTask from './home/task/ReEditTask'


import Drink from 'journey/habits/Drink'
import Challenge from 'journey/habits/task/Challenge'
import Action from 'journey/habits/task/Action'


export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* <Route path='/details' component={Details} ></Route> */}
                    <Route path='/detials' component={Details} ></Route>
                    <Route path='/morning' component={Morning} ></Route>
                    <Route path='/noon' component={Noon} ></Route>
                    <Route path='/afternoon' component={Afternoon} ></Route>
                    <Route path='/AddTask' component={AddTask} ></Route>
                    <Route path='/ReEditTask' component={ReEditTask} ></Route>

                    <Route path='/drink' component={Drink} ></Route>
                    <Route path='/challenge' component={Challenge} ></Route>
                    <Route path='/action' component={Action} ></Route>


                    <Route path='/index' component={Index} ></Route>
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
