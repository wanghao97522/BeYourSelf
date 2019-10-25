import React, { Component } from 'react'
import { Route , Switch , Redirect  } from 'react-router-dom'
import Index from './Index'
import Page404 from './Page404'
//home的组件
import Habits from './home/habits/Habits'
import AddTask from './home/task/AddTask'
import AddTaskItem from './home/task/AddTaskItem'
import ReEditTask from './home/task/ReEditTask'
import OpenMyBT from './home/habits/OpenMyBT'
//journey的组件
import AllTravel from 'journey/pages/alltravel/AllTravel'
import SecretTravel from 'journey/pages/alltravel/asecrettravel/SecretTravel'
import Night from 'journey/pages/alltravel/night/SecretTravel'
import Focus from 'journey/pages/alltravel/focus/SecretTravel'
import Healthy from 'journey/pages/alltravel/healthy/SecretTravel'
import Drink from 'journey/habits/Drink'
import Challenge from 'journey/habits/task/Challenge'
import Action from 'journey/habits/task/Action'
import Breakfast from 'journey/habits/task/Breakfast'
//growing的组件
import Timeline from './growing/views/timeline/TimelineContainer';
import Letter from './growing/views/letter/LetterContainer';
import NewHabit from './growing/views/newhabit/NewSoundContainer';
import SoundHabit from './growing/views/soundhabit/SoundHabitContainer';
import SoundTip from './growing/views/soundtip/SoundTipContainer';
import TaskTime from './growing/views/tasktime/TaskTimeContianer';
import Selecttime from './growing/views/selecttime/SelectTimeContainer';
//profile的组件
import Setting from './profile/setting/Setting'
import AboutUs from './profile/aboutUs/AboutUs'
import Vip from './profile/vip/Vip'
import MyAward from './profile/myaward/MyAward'
import InvitPage from './profile/invitpage/InvitPage'
import Personal from './profile/personalData/PersonalData'
import Help from './profile/help/Help'
import Recard from './profile/recard/Recard'

// login的组件
import LoginIndex from './login/login_index'
import Login from './login/login/Login'
import Register from './login/register/Register'
import Verification from './login/verification/Verification'
import SetPwd from './login/setpwd/SetPwd'
import FindPwd from './login/findpwd/FindPwd'
import RegSucc from './login/registersucc/RegisterSucc'
export default class MyRouter extends Component {
    render() {
        return (
            <>
                <Switch>
                    {/* home的路由 */}
                    <Route path='/addTask' component={AddTask} ></Route>
                    <Route path='/habit' exact component={Habits} ></Route>
                    <Route path='/addTask' exact component={AddTask} ></Route>
                    <Route path='/addTaskItem' exact component={AddTaskItem} ></Route>
                    <Route path='/reEditTask' component={ReEditTask} ></Route>
                    <Route path='/openMyBT' component={OpenMyBT} ></Route>

                    {/* journey的路由 */}
                    <Route path='/drink' component={Drink} ></Route>
                    <Route path='/challenge' component={Challenge} ></Route>
                    <Route path='/action' component={Action} ></Route>
                    <Route path='/alltravel' component={AllTravel} ></Route>
                    <Route path='/asecrettravel' component={SecretTravel} ></Route>
                    <Route path='/night' component={Night} ></Route>
                    <Route path='/focus' component={Focus} ></Route>
                    <Route path='/healthy' component={Healthy} ></Route>
                    <Route path='/breakfast' component={Breakfast} ></Route>

                    {/* growing的路由 */}
                    <Route path="/timeline" component={Timeline}></Route>
                    <Route path="/letter" component={Letter}></Route>
                    <Route path="/newhabit" component={NewHabit}></Route>
                    <Route path="/soundhabit" component={SoundHabit}></Route>
                    <Route path="/soundtip" component={SoundTip}></Route>
                    <Route path='/index' component={Index} ></Route>
                    <Route path='/selecttime' component={Selecttime}></Route>
                    {/* profile的路由 */}
                    <Route path='/setting' component={Setting} ></Route>
                    <Route path='/aboutus' component={AboutUs}></Route>
                    <Route path='/vip' component={Vip}></Route>
                    <Route path='/myaward' component={MyAward}></Route>
                    <Route path='/invitpage' component={InvitPage}></Route>
                    <Route path='/personaldata' component={Personal}></Route>
                    <Route path='/help' component={Help}></Route>
                    <Route path='/Recard' component={Recard}></Route>

                    {/* login的路由 */}
                    <Route path='/loginindex' component={LoginIndex}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/verification' component={Verification}></Route>
                    <Route path='/setpwd' component={SetPwd}></Route>
                    <Route path='/registersucc' component={RegSucc}></Route>
                    <Route path='/findpwd' component={FindPwd}></Route>
                    <Redirect from='/' exact to='/loginindex' />
                    <Route component={Page404} ></Route>
                </Switch>
            </>
        )
    }
}
