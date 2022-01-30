import React, {Component} from "react";

import Header from '../Header';
import TaskList from "../TaskList";
import Footer from "../Footer";
import './App.css';

export default class App extends Component{
  state = {
    todoData : [
      {label: 'Task 1' , className:'completed', id: 1},
      {label: 'Task 2' , className:'editing', id: 2},
      {label: 'Task 3' , className:'', id: 3}
     ]
  }
deleteItem = (id) => {
  this.setState(({todoData}) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const before = todoData.slice(0, idx);
    const after = todoData.slice(idx + 1);
    const newArray = [...before, ...after];
    return {
      todoData : newArray
    }
  });
  }

 render(){
  return (
    <section className="todoapp">
      <section className="main">
       <Header />
       <TaskList todos = {this.state.todoData} onDeleted = {this.deleteItem}/>
       <Footer />
      </section>
    </section>
  );
}
};
