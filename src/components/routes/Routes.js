import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../landingPage/LandingPage';
import Explore from '../explore/Explore';
import Instructors from '../instructors/Instructors';
import SignIn from '../signIn/SignIn';
import InProgress from '../inProgress/InProgress';
import InstructorAdditionalInfo from '../instructorAdditionalInfo/InstructorAdditionalInfo';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={ LandingPage } exact/>
                <Route path="/explore" component={ Explore } exact/>
                <Route path="/instructors" component={ InstructorAdditionalInfo } exact/>
                <Route path="/signin" component={ SignIn } exact/>
                <Route path="/*" component = { InProgress } exact />
            </Switch>
        );
    }
}

export default Routes;