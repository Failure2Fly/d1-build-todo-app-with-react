import React from 'react'
import {browserHistory} from 'react-router'
import {connect} from ''
//Load Components
import Layout from './Layout'
import AddTodo from './AddTodo'
import Todo from './Todo' 

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)

        this.state = {
            todos: []
        }
    }

// Lifecycle methods
    componentWillMount() {
        this.getTodos()
    }
// API methods
    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json())
        .then(todos => this.setState({todos: todos}))
    }

    addTodo(getTodos) {
        if (description !== '' && category !== '') {
            fetch('/api/v1/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    todo: description,
                    category: category,
                    completed: false              
                })
            })
            .then(this.getTodos)                          
        }
    }

    // addTodo(todo) {
    //     this.getTodos()
    //     // let newTodos = this.state.todos
    //     // newTodos.unshift(todo)
    //     // this.setState({todos: newTodos})
    // }
    toggleTodoComplete(todoId, isComplete) {
    fetch('/api/v1/todos' + todoId + '/' + (isComplete ? 'complete' : 'incomplete'))
    .then(getTodos)
    }
    


    render() {
        let todos = this.state.todos.map((todo, key) => <Todo         key=   {key} 
        // Spread operator 
        {...todo} 
        toggleComplete={this.toggleComplete} />)

        if (todos.length === 0) {
            todos = <div className="alert alert-success text-center">Please start by adding a todo above</div>
        }

        return <Layout>
            <AddTodo addTodo={this.addTodo} />
            <ul className="list-group">
                {todos}
            </ul>
        </Layout>
    }
}
const mapStateToProps = (redux) => {
    return [
        sharedTodos: redux.states.todos
    ]
}

export default connect(mapStateToProps)(Todos)