import React, { Component } from 'react'
import { Route , Switch , Redirect  } from 'react-router-dom'
import Index from './Index'
// import Details from './Details'
import Page404 from './Page404'
import Morning from './home/habits/Morning'
import Noon from './home/habits/Noon'
import Afternoon from './home/habits/Afternoon'
import AddTask from './home/task/AddTask'
import ReEditTask from './home/task/ReEditTask'
import OpenMyBT from './home/habits/OpenMyBT'

import AllTravel from 'journey/pages/alltravel/AllTravel'
import SecretTravel from 'journey/pages/asecrettravel/SecretTravel'

import Drink from 'journey/habits/Drink'
import Challenge from 'journey/habits/task/Challenge'
import Action from 'journey/habits/task/Action'



import Timeline from './growing/views/timeline/TimelineContainer';
import Letter from './growing/views/letter/LetterContainer';

import NewHabit from './growing/views/newhabit/NewSoundContainer';
//profile的组件
import Setting from './profile/setting/Setting'
import AboutUs from './profile/aboutUs/AboutUs'
import Vip from './profile/vip/Vip'
import MyAward from './profile/myaward/MyAward'
import InvitPage from './profile/invitpage/InvitPage'
import Personal from './profile/personalData/PersonalData'

export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/morning' component={Morning} ></Route>
                    <Route path='/noon' component={Noon} ></Route>
                    <Route path='/afternoon' component={Afternoon} ></Route>
                    <Route path='/addTask' component={AddTask} ></Route>
                    <Route path='/reEditTask' component={ReEditTask} ></Route>
                    <Route path='/openMyBT' component={OpenMyBT} ></Route>

                    <Route path='/drink' component={Drink} ></Route>
                    <Route path='/challenge' component={Challenge} ></Route>
                    <Route path='/action' component={Action} ></Route>
                    <Route path='/alltravel' component={AllTravel} ></Route>
                    <Route path='/asecrettravel' component={SecretTravel} ></Route>


                    <Route path="/timeline" component={Timeline}></Route>
                    <Route path="/letter" component={Letter}></Route>
                    <Route path="/newhabit" component={NewHabit}></Route>
                    <Route path='/index' component={Index} ></Route>

                    {/* profile的路由 */}
                    <Route path='/setting' component={Setting} ></Route>
                    <Route path='/aboutus' component={AboutUs}></Route>
                    <Route path='/vip' component={Vip}></Route>
                    <Route path='/myaward' component={MyAward}></Route>
                    <Route path='/invitpage' component={InvitPage}></Route>
                    <Route path='/personaldata' component={Personal}></Route>

                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
