import React, { Component } from 'react'
import { Route , Switch , Redirect  ,Link} from 'react-router-dom'
import Index from './Index'
// import Details from './Details'
import Page404 from './Page404'

import Habits from './home/habits/Habits'
// import Morning from './home/habits/Morning'
// import Noon from './home/habits/Noon'
// import Afternoon from './home/habits/Afternoon'
import AddTask from './home/task/AddTask'
import AddTaskItem from './home/task/AddTaskItem'
import ReEditTask from './home/task/ReEditTask'
import OpenMyBT from './home/habits/OpenMyBT'

import AllTravel from 'journey/pages/alltravel/AllTravel'
import SecretTravel from 'journey/pages/asecrettravel/SecretTravel'

import Drink from 'journey/habits/Drink'
import Challenge from 'journey/habits/task/Challenge'
import Action from 'journey/habits/task/Action'
import Breakfast from 'journey/habits/task/Breakfast'



import Timeline from './growing/views/timeline/TimelineContainer';
import Letter from './growing/views/letter/LetterContainer';
import NewHabit from './growing/views/newhabit/NewSoundContainer';
import SoundHabit from './growing/views/soundhabit/SoundHabitContainer';
import SoundTip from './growing/views/soundtip/SoundTipContainer';
//profile的组件
import Setting from './profile/setting/Setting'
import AboutUs from './profile/aboutUs/AboutUs'
import Vip from './profile/vip/Vip'
import MyAward from './profile/myaward/MyAward'
import InvitPage from './profile/invitpage/InvitPage'
import Personal from './profile/personalData/PersonalData'
import Help from './profile/help/Help'
// login的组件
import LoginIndex from './login/login_index'
import Login from './login/login/Login'
import Register from './login/register/Register'
import Verification from './login/verification/Verification'
import SetPwd from './login/setpwd/SetPwd'
import RegSucc from './login/registersucc/RegisterSucc'
import FindPwd from './login/findpwd/FindPwd'
export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* home的路由 */}
                    <Route path='/addTask' component={AddTask} ></Route>
                    <Route path='/morning' exact component={Habits} ></Route>
                    <Route path='/noon' exact component={Habits} ></Route>
                    <Route path='/afternoon' exact component={Habits} ></Route>
                    <Route path='/:time/addTask' exact component={AddTask} ></Route>
                    <Route path='/:time/addTask/addTaskItem' exact component={AddTaskItem} ></Route>
                    <Route path='/reEditTask' component={ReEditTask} ></Route>
                    <Route path='/openMyBT' component={OpenMyBT} ></Route>

                    {/* journey的路由 */}
                    <Route path='/drink' component={Drink} ></Route>
                    <Route path='/challenge' component={Challenge} ></Route>
                    <Route path='/action' component={Action} ></Route>
                    <Route path='/alltravel' component={AllTravel} ></Route>
                    <Route path='/asecrettravel' component={SecretTravel} ></Route>
                    <Route path='/breakfast' component={Breakfast} ></Route>

                    {/* growing的路由 */}
                    <Route path="/timeline" component={Timeline}></Route>
                    <Route path="/letter" component={Letter}></Route>
                    <Route path="/newhabit" component={NewHabit}></Route>
                    <Route path="/soundhabit" component={SoundHabit}></Route>
                    <Route path="/soundtip" component={SoundTip}></Route>
                    <Route path='/index' component={Index} ></Route>

                    {/* profile的路由 */}
                    <Route path='/setting' component={Setting} ></Route>
                    <Route path='/aboutus' component={AboutUs}></Route>
                    <Route path='/vip' component={Vip}></Route>
                    <Route path='/myaward' component={MyAward}></Route>
                    <Route path='/invitpage' component={InvitPage}></Route>
                    <Route path='/personaldata' component={Personal}></Route>
                    <Route path='/help' component={Help}></Route>
                    {/* login的路由 */}
                    <Route path='/loginindex' component={LoginIndex}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/verification' component={Verification}></Route>
                    <Route path='/setpwd' component={SetPwd}></Route>
                    <Route path='/registersucc' component={RegSucc}></Route>
                    <Route path='/findpwd' component={FindPwd}></Route>
                    <Route path='/code' component={FindPwd}></Route>

                    <Link to={{ path : ' /verification ' , state : { name : 'sunny' }}}></Link>
                    
                    <Redirect from='/' exact to='/index/home'></Redirect> 
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
