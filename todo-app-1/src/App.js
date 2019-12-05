import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoItem from './components/TodoItem'

import AddTodo from './components/AddTodo'
import uuid from 'uuid'


import './App.css';
import axios from 'axios';



class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
      
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(res => this.setState({ todos: res.data}))      
      
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    //addTodo
    addTodo = (title) => {
const newTodo = {
  id: uuid.v4(),
  title: title ,
  completed: false
}
      
      this.setState({ todos: [...this.state.todos, newTodo]})
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
          <div>
            <Header />
            
            <div className="todo-list">
            
                {todoItems}
                <AddTodo addTodo={this.addTodo} /> 
            </div>
            
            <Footer/>
            </div>
        )    
    }
}

export default App