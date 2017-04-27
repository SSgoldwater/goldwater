import React from 'react';
import AppDispatcher from '../../dispatcher/AppDispatcher';
import ToDoStore from '../../stores/ToDoStore.js';
import CreateToDo from './CreateToDo';
import ToDoItem from './ToDoItem';
import styles from './styles/MainStyles';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ToDoStore.getToDos()
    }
  }

  componentDidMount() {
    ToDoStore.addChangeListener(this._onChange);
  };

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this._onChange);
  };

  _onChange = () => {
    this.setState({ todos: ToDoStore.getToDos() });
  }

  render() {
    const _todos = this.state.todos
      .sort((a, b) => {
        if (parseInt(a.id) < parseInt(b.id)) return 1;
        if (parseInt(a.id) > parseInt(b.id)) return -1;
      })
      .map((todo, i) => {
        return (
          <ToDoItem
            key={ todo.text }
            todo={ todo }
          />
        );
      });

    return (
      <div>
        <CreateToDo />
        { _todos }
      </div>
    )
  }
}

export default Main;
