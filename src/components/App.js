import React from 'react';
import Todos from './Todos';
import Todo from './Todo';
import AddTodo from './AddTodo'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.getTodos = this.getTodos.bind(this)
        this.addTodo = this.addTodo.bind(this)

        this.state = {
            todos: []
        }
    }
    componenetWillMount() {
        this.getTodos()
        // fetch('api/v1/todos')
        // .then(response => response.json())
        // .then(todos => this.setState({todos}))
    }

    getTodos() {
        fetch('/api/v1/todos')
        .then(response => response.json)
        .then(todos => this.setState({todos: todos}))
    }

    addTodo(todo) {
        this.getTodos()
        // let newTodos = this.state.todos
        // newTodos.unshift(todo)
        // this.setState({todos: newTodos})
    }

    render() {
        let todos = this.state.todos.map((todo, key) => <Todo description={todo.todo} category={todo.category} key ={key} />)

        return <div>
        <br />
            <AddTodo addTodo={this.addTodo}/>
            <Todos />
        </div>
    }
}

export default App;