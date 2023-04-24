import React from 'react';
import './todo.css';

const TodoItem = ({ children, checked, handleCheck }) => (
  <div className="todo-item">
    <input
      type="checkbox"
      defaultChecked={checked}
      onChange={e => handleCheck(children)}
    />
    <span>{children.name}</span>
  </div>
);

export default TodoItem;
