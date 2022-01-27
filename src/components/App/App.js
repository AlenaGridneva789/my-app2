import React from "react";

import Header from '../Header';
import TaskList from "../TaskList";
import Footer from "../Footer";
import './App.css';

const App = () => {
  const todoData = [
   {label: 'Completed task' , className:'completed', id: 1},
   {label: 'Editing task' , className:'editing', id: 2},
   {label: 'Active task' , className:'', id: 3}
  ];
  return (
    <section className="todoapp">
      <section className="main">
       <Header />
       <TaskList todos = {todoData}/>
       <Footer />
      </section>
    </section>
  );
};
export default App;