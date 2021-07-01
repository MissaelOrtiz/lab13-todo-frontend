import React, { Component } from 'react'
import { addTodo, getTodos} from './utils'
import TodoItem from './TodoItem'

export default class TodoListPage extends Component {
    state = {
        todos: [],
        new_todo: ''
    }

    doFetch = async () => {
        const todos = await getTodos(this.props.token);
        this.setState({ todos: todos })
    }

    componentDidMount = async () => {
        await this.doFetch()
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await addTodo(this.state.new_todo, this.props.token);
        await this.doFetch()
    }

    handleNewTodo = (e) => {
        this.setState({ new_todo: e.target.value })
    }

    render() {
        return (
            <div>
                {
                    this.state.todos.map((task, i) =>
                        <TodoItem data={task} key={i} />
                    )
                }
            </div>
        )
    }
}
