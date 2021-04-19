import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import Login from './Components/pages/authentication/Login'
import Register from './Components/pages/authentication/Register'
import Users from './Components/user/Users';
import Add from './Components/user/Add'
import Edit from './Components/user/Edit';
import InitialPresentation from './Components/patient/InitialPresentation/InitialPresentation';
import Pathology from './Components/patient/Pathology/Pathology';
import Treatment from './Components/patient/Treatment/Treatment';
import FollowUp from './Components/patient/FollowUp/FollowUp';
import HealthEconomics from './Components/patient/HealthEconomics/HealthEconomics';
import Demography from './Components/patient/Demography/Demography';
import DemographyEdit from './Components/patient/Demography/DemographyEdit';
import InitialPresentationEdit from './Components/patient/InitialPresentation/InitialPresentationEdit';
import EditPathology from './Components/patient/Pathology/EditPathology';
import EditTreatment from './Components/patient/Treatment/EditTreatment';
import EditFollowUp from './Components/patient/FollowUp/EditFollowUp';
import EditHealthEconomics from './Components/patient/HealthEconomics/EditHealthEconomics';
import Logout from './Components/pages/authentication/Logout';

//const App = () => {
class App extends React.Component {    
    //const [loginInfo, setLoginInfo] = useState('user_not_logged_in')
    constructor(props){
        super(props);            
        this.state = {
            loginInfo : "user_not_logged_in",            
        }        
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(data){
        this.state = {
            loginInfo: "user_logged_in",            
        }
    }

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                    <>
                        <Route path='/login' component={Login} exact></Route>
                        <Route path='/' component={Dashboard} exact></Route>
                        <Route path='/dashboard' component={Dashboard} exact></Route>
                        <Route path='/logout' component={Logout} exact></Route>
                        <Route path='/demography' component={Demography} exact></Route>
                        <Route path='/dashboard' component={Dashboard} exact></Route>
                        <Route path='/demography/edit/:code' component={DemographyEdit} exact></Route>
                        <Route path='/users' component={Users} exact></Route>                    
                        <Route path='/register' component={Register} exact></Route>
                        <Route path='/users/add' component={Add} exact></Route>
                        <Route path='/users/edit/:id' component={Edit} exact></Route>
                        <Route path='/initial-presentation/:code' component={InitialPresentation} exact></Route>
                        <Route path='/initial-presentation/edit/:code' component={InitialPresentationEdit} exact></Route>
                        <Route path='/pathology/:code' component={Pathology} exact></Route>
                        <Route path='/pathology/edit/:code' component={EditPathology} exact></Route>
                        <Route path='/treatment/:code' component={Treatment} exact></Route>
                        <Route path='/treatment/edit/:code' component={EditTreatment} exact></Route>
                        <Route path='/follow-up/:code' component={FollowUp} exact></Route>
                        <Route path='/follow-up/edit/:code' component={EditFollowUp} exact></Route>
                        <Route path='/health-economics/:code' component={HealthEconomics} exact></Route>
                        <Route path='/health-economics/edit/:code' component={EditHealthEconomics} exact></Route></>
                    
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;