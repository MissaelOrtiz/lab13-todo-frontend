import React, { Component } from 'react'
import { completeTodo } from './utils'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>Task: {this.props.data.todo}</p>
                <p>Completed: {this.props.data.completed.toString()}</p>
                <button onClick={async () => { 
                    await completeTodo(this.props.data.id, this.props.token)
                    await this.props.event()}}>Done!</button>
            </div>
        )
    }
}
