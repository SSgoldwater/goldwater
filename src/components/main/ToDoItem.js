import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ToDoStore from '../../stores/ToDoStore.js';
import ToDoActions from '../../actions/ToDoActions';
import ToDo from '../../models/ToDo';
import styles from './styles/ToDoStyles';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      editValue: this.props.todo.text,
      todo: this.props.todo
    }
  }

  _editModeOn = () => {
    this.setState({ editing: true });
  }

  _editValueChange = (event) => {
    this.setState({ editValue: event.target.value });
  }

  _saveEdit = () => {
    ToDoActions.updateToDo({
      id: this.props.todo.id,
      text: this.state.editValue
    });
    this.setState({ editing: false });
  }

  render() {
    const _showToDo = this.state.editValue

    const _editToDo = (
      <TextField
        id={ this.state.editValue }
        value={ this.state.editValue }
        onChange={ this._editValueChange }
      />
    );

    const _editButton = (
      <RaisedButton
        label={ "Edit" }
        onTouchTap={ this._editModeOn }
      />
    );

    const _saveButton = (
      <RaisedButton
        label={ "Save" }
        onTouchTap={ this._saveEdit }
      />
    );

    return (
      <Paper
        style={ styles.todo }
      >
        { 
          this.state.editing ?
            _editToDo :
            _showToDo
        }

        <div style={{ textAlign: "right" }}>
          { 
            this.state.editing ?
              _saveButton :
              _editButton
          }
          <RaisedButton
            label={ "Delete" }
            onTouchTap={ ToDoActions.deleteToDo(this.state.todo) }
          />
        </div>
      </Paper>
    );
  }
}

export default ToDoItem;
