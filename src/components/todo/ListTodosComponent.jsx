import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js'
import TodoDataService from '../../api/todo/TodoDataService.js'

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
                // {id: 1, description: "Learn to dance", done:false, targetDate: new Date()},
                // {id: 2, description: "Master React", done:false, targetDate: new Date()},
                // {id: 3, description: "Visit Italy", done:false, targetDate: new Date()}
            ]
        }
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true;
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUsername
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                console.log(response)
            }
        )
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo => 
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

export default ListTodosComponent