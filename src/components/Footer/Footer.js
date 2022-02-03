import React from "react"


import './Footer.css'
import TaskFilter from "../TaskFilter"

const Footer = ({completedCount, onClearAllCompleted, onFilterItems, filter}) => {

  return (
    <footer className="footer">
      <span className="todo-count">{completedCount} items left</span>
      <TaskFilter 
        onFilterItems={onFilterItems}
        filter={filter}/>
      <button 
        className="clear-completed"
        onClick={onClearAllCompleted}>
        Clear completed</button>
    </footer>
  )
}

 export default Footer;
 