import React, { Component } from 'react';
import {
  BrowserRouter as Router,Route} from "react-router-dom";
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import { v4 as uuidv4 } from 'uuid';
import './App.css'; 


class App extends Component {
  
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Meting with USA client',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Lunch in Office',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Dinner with Family',
        completed: false
      }
    ]
  }
  //Toogle completed

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  //Deleted
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  //AddTodo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false

    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  
  render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
               <Route 
        
                path="/about"
                 render={props=>(
                <React.Fragment>
               <AddTodo addTodo={this.addTodo} />
               <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
               </React.Fragment>
                )
               }
               
                 
                />
              
                    <Route path="/about" component={About}/>
            </div>
          </div>
    </Router>

      );
    }
  }

  export default App;