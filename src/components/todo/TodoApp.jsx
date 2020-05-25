import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import Login from './Login.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Logout from './Logout.jsx'
import Error from './Error.jsx'
import Welcome from './Welcome.jsx'


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                    <Header/>
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/login" component={Login} />
                            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={Logout} />
                            <Route component={Error} />
                        </Switch>
                    <Footer />
                    </>
                </Router>
            </div>
        )
    }
}


export default TodoApp;