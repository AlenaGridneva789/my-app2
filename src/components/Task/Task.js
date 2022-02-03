import React, { Component } from "react"
import './Task.css'


export default class Task extends Component {

  render() {

    const { label, onDeleted, onToggleDone, completed, date } = this.props

    console.log(typeof date);
    let classNames = 'active'
    if (completed) {
      classNames = 'completed'
    }

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onToggleDone} />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {date}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    )
  }
}

 