import React,{Component} from "react";
import './Task.css';
import {formatDistanceToNow} from 'date-fns';
console.log(formatDistanceToNow);

export default class Task extends Component{
  state ={
    done:false,
  }
  onInputToggle = () =>{
  this.setState(({done})=>{
    return {
      done: !done
    }
  })
  }
  render(){
    const{label, onDeleted} = this.props;
    const{done} = this.state;
    let classNames;
    if(done) {
      classNames = 'completed';
    }
    return (
      <li className={classNames} onClick={this.onInputToggle}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>
                <span className="description">{label}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy" onClick={onDeleted}></button>
            </div> 
      </li>      
    )
}
}
