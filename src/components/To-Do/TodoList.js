import React from 'react';
import TodoItem from './TodoItem';
import Button from './Button';
import './todo.css';

const todo = [
  { name: 'Action 1', checked: false, id: 1 },
  { name: 'Action 2', checked: false, id: 2 },
  { name: 'Action 3', checked: false, id: 3 },
];

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({ elements: todo });
  }

  handleCheck = ({ name, checked, id }) => {
    const time = new Date();
    console.log(`Action "${name}" was changed at ${time.toLocaleTimeString()}`);

    const elems = this.state.elements.map(item =>
      item.id === id ? { ...item, checked: !checked } : item,
    );

    this.setState({ elements: elems });
  };

  handleClick() {
    let count = 0;
    this.state.elements.forEach(item => item.checked && count++);
    console.log(`Finished tasks: ${count}`);
  }

  render() {
    const { elements } = this.state;
    return (
      <>
        <div className="todo-list">
          {elements.map(item => (
            <TodoItem key={item.id} handleCheck={this.handleCheck}>
              {item}
            </TodoItem>
          ))}
        </div>
        <div className="btn-wrapper">
          <Button handleClick={this.handleClick} />
        </div>
      </>
    );
  }
}

export default TodoList;
