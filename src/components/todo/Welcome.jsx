import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/HelloWorldService'

class Welcome extends Component{
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }

    render() {
        return (
            <>
            <h1>Welcome</h1>
            <div>
                Welcome {this.props.match.params.name}.
                You can manage your todos <Link to="/todos">here</Link>.
            </div>
            <div>
                Click here to get a customized welcome message.
                <button onClick={this.retrieveWelcomeMessage} 
                    className="btn btn-success">Get Welcome message</button>
            </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => console.log(response))
        HelloWorldService.executeHelloWorldBeanService()
        .then(response => console.log(response))
        //.catch()
    }

    handleSuccessfulResponse(response) {
        console.log(response);
        this.setState({welcomeMessage: response.data.message})
    }

}

export default Welcome