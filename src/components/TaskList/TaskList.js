import React from "react"
import './TaskList.css'
import Task from "../Task"
import propTypes from 'prop-types'
const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item
    return (
      <Task
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)} />
    )
  })

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  )
}
TaskList.defaultProps = {
todos: [],
onDeleted: ()=>{},
onToggleDone: ()=>{}
}
TaskList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleted: propTypes.func,
  onToggleDone: propTypes.func

}
export default TaskList
